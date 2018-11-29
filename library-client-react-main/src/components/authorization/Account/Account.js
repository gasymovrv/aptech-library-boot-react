import React from 'react';
import InfoBox from '../../InfoBox/InfoBox';
import {consoleLogWithContext} from '../../../helpers/consoleLog';

export default function Account({location, history}) {
    let successSubmit, showInfo;
    //props.history.action === 'REPLACE' - это исключает вход в условие при обновлении страницы (там action='POP')
    if(location && history && location.state && history.action === 'REPLACE'){
        successSubmit = location.state.successSubmit;
        showInfo = location.state.showInfo;
    }
    history && consoleLogWithContext('props.history.action', history.action, Account);
    return (
        <div className='col-sm-9'>
            <InfoBox infoKey='login-info'
                     successAction={successSubmit}
                     errorText='Неверный логин или пароль!'
                     successText='Вы успешно авторизовались!'
                     timeout={7}
                     show={showInfo}
            />
            Вы авторизованы
        </div>
    )
}
