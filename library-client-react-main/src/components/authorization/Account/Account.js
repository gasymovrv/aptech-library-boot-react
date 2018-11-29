import React from 'react';
import InfoBox from '../../InfoBox/InfoBox';

export default function Account({location}) {
    let successSubmit, showInfo;
    if(location && location.state){
        successSubmit = location.state.successSubmit;
        showInfo = location.state.showInfo;
    }
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
