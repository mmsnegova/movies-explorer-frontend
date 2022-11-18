import React from 'react';
import Header from '../Header/Header';
import LabelWithInput from '../LabelWithInput/LabelWithInput';
import SectionForm from '../SectionForm/SectionForm';
import './Register.css';

function Register() {
    return (
        <>
            <Header type="logon" />
            <main className="register">
                <SectionForm
                    form="logon"
                    typeButton="signin"
                    title="Добро пожаловать!"
                    textButton="Зарегистрироваться"
                    nameButton="logon"
                    span="Уже зарегистрированы? "
                    textLink="Войти"
                    path="/signin"
                >
                    <LabelWithInput
                        form="logon"
                        type="text"
                        label="Имя"
                        name="name"
                    />
                    <LabelWithInput
                        form="logon"
                        type="email"
                        label="E-mail"
                        name="email"
                    />
                    <LabelWithInput
                        form="logon"
                        type="password"
                        label="Пароль"
                        name="password"
                    />
                    <span class={`section-form__error`}>
                        Что-то пошло не так...
                    </span>
                </SectionForm>
            </main>
        </>
    );
}

export default Register;
