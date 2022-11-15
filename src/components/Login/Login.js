import React from 'react';
import Header from '../Header/Header';
import LabelWithInput from '../LabelWithInput/LabelWithInput';
import SectionForm from '../SectionForm/SectionForm';
import './Login.css';

function Login() {
    return (
        <>
            <Header type="logon" />
            <main className="login">
                <SectionForm
                    form="logon"
                    typeButton="signup"
                    title="Рады видеть!"
                    textButton="Войти"
                    nameButton="signup"
                    span="Ещё не зарегистрированы? "
                    textLink="Регистрация"
                    path="/signup"
                >
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
                </SectionForm>
            </main>
        </>
    );
}

export default Login;
