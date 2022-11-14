import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import LabelWithInput from '../LabelWithInput/LabelWithInput';
import SectionForm from '../SectionForm/SectionForm';
import './Profile.css';

function Profile(props) {
    return (
        <>
            <HeaderLogin
                onNavMenu={props.onNavMenu}
                isOpenNavMenu={props.isOpenNavMenu}
            />
            <main className="profile">
                <SectionForm
                    form="profile"
                    title="Привет, Мария!"
                    textButton="Редактировать"
                    nameButton="exit"
                    textLink="Выйти из аккаунта"
                    path="/"
                >
                    <LabelWithInput
                        form="profile"
                        type="text"
                        label="Имя"
                        name="name"
                        defaultValue="Мария"
                    />
                    <LabelWithInput
                        form="profile"
                        label="E-mail"
                        name="email"
                        defaultValue="pochta@yandex.ru"
                    />
                </SectionForm>
            </main>
        </>
    );
}

export default Profile;
