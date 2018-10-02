import React from 'react';


class Watch extends React.Component {

    state = {
        time: new Date(),
    };

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

    //------Методы жизненного цикла-------

    // срабатывает при изменениях пропсов
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
    }

    // 1.
    // срабатывает при создании объекта текущего класса (компонента)
    // constructor = componentWillMount

    // 2.
    // вызывается автоматически для отрисовки компонента
    // render()

    // 3.
    // срабатывает после появления текущего компонента в DOM (вызова render())
    //нужно для 1-го запуска часов
    componentDidMount(){
        if(this.props.isActive) {
            this.activateWatch(1000);
        } else {
            this.deactivateWatch();
        }
    }

    // 4.
    // срабатывает после удаления текущего компонента из DOM
    // setState - НЕЛЬЗЯ
    componentWillUnmount(){
        this.deactivateWatch();
    }

    render() {
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
        return (<p className={this.props.isActive ?  "" : "disabled-watch"}>{hour} : {min} : {sec}</p>)
    }
}

export default Watch;
