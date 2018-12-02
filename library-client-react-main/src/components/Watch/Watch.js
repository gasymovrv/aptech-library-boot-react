import React from 'react';
import {consoleLog} from '../../helpers/consoleLog';

/**
 * Это просто образец с примерами работы методов жизненного цикла
 * и реализации state-full компонента.
 * Используется только в Header
 */
export default class Watch extends React.Component {


    //--------------------------Методы жизненного цикла---------------------------------



    //--------------------------Инициализация------------

    // 1.
    // срабатывает при создании объекта текущего класса (компонента)
    // constructor = componentWillMount
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            time: new Date()
        };
        consoleLog('constructor');
    }

    componentWillMount(){
        consoleLog('componentWillMount');
    }

    // 2.
    // вызывается автоматически для отрисовки компонента
    render() {
        const {isActive, onToggleWatch, watchText} = this.props;
        if(typeof onToggleWatch !== 'function' || watchText === undefined || isActive ===undefined ){
            return null;
        }
        const {time, watchStyle} =this.state;
        let sec = time.getSeconds();
        let min = time.getMinutes();
        let hour = time.getHours();
        if(sec < 10){
            sec='0'+sec;
        }
        if(min < 10){
            min='0'+min;
        }
        if(hour < 10){
            hour='0'+hour;
        }
        consoleLog('render');
        return (
            <div className='row'>
                <ul className='list-inline'>
                    <li><input className='btn btn-sm' type='button' onClick={onToggleWatch} value={watchText}/></li>
                    <li><p ref={this.handleButtonRef} className={this.props.isActive ?  '' : 'disabled-watch'}>{hour} : {min} : {sec}</p></li>
                </ul>
            </div>
        )
    }

    // 3.
    // срабатывает после появления текущего компонента в DOM (вызова render())
    //нужно для 1-го запуска часов
    componentDidMount(){
        if(this.props.isActive) {
            this.activateWatch(1000);
        } else {
            this.deactivateWatch();
        }
        document.addEventListener('click', this.onDocumentClick);
        consoleLog('componentDidMount');
        consoleLog('-----------------------end init cycle---------------------------------------');
    }



    //--------------------------Обновление----------

    // 1.
    //вызовется только при setState **родителей** даже когда пропсы не менялись
    //nextProp - обновленные пропсы
    //this.props - старые пропсы
    //нужно для работы переключателя часов
    componentWillReceiveProps(nextProp) {
        //если стало активно - включаем интервал
        if (nextProp.isActive && !this.props.isActive) {
            this.activateWatch(1000);
        } else if (!nextProp.isActive && this.props.isActive) {
            this.deactivateWatch();
        }
        consoleLog('componentWillReceiveProps');
    }

    // 2.
    //вызовется при setState **родителей** или **внутри** самого компонента
    shouldComponentUpdate(nextProps, nextState){
        consoleLog('shouldComponentUpdate');
        return true;
    }

    // 3.
    //вызовется при setState **родителей** или **внутри** самого компонента, прямо перед ререндерингом
    componentWillUpdate(nextProps, nextState){
        consoleLog('componentWillUpdate');
    }

    // 4.
    //render()

    // 5.
    //после отрисовки
    componentDidUpdate(prevProps, prevState){
        consoleLog('componentDidUpdate');
        consoleLog('-----------------------end update cycle---------------------------------------');
    }



    //--------------------------Удаление----------

    // 1.
    // срабатывает после удаления текущего компонента из DOM
    // setState - НЕЛЬЗЯ
    componentWillUnmount(){
        document.removeEventListener('click', this.onDocumentClick);
        this.deactivateWatch();
        consoleLog('-------------------componentWillUnmount-------------------------------');
    }









    //--------------------------Обработчики и прочее---------------------------------


    //пишем через стрелочную чтобы связать this
    updateTime = () => {
        this.setState({time: new Date()});
    };

    //пишем через стрелочную чтобы связать this
    activateWatch = (interval) => {
        this.updateTime();
        this.interval= setInterval(this.updateTime,interval);
    };

    //пишем через стрелочную чтобы связать this
    deactivateWatch = () => {
        clearInterval(this.interval);
    };

    //Обработка ref
    handleButtonRef = (node) => {
        this.button = node;
    };
    //ref исп-ся если нужно по разному реагировать в зависимости от DOM-элемента
    onDocumentClick = (event)=>{
        if(this.button === event.target){
            alert('Попали на часы!!! (тестируем ref)')
        }
    };

}
