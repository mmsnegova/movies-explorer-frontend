import React from 'react';
import useFormWithValidation from '../../utils/validation';
import Header from '../Header/Header';
import LabelWithInput from '../LabelWithInput/LabelWithInput';
import SectionForm from '../SectionForm/SectionForm';
import { regex } from '../../utils/constants';
import './Login.css';

function Login(props) {
    const validation = useFormWithValidation();
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onLogin({
            ...validation.values,
        });
        validation.resetForm();
    }

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
                    onSubmit={handleSubmit}
                    isValid={validation.isValid}
                    isDisabled={props.isDisabled}
                >
                    <LabelWithInput
                        form="logon"
                        type="email"
                        label="E-mail"
                        name="email"
                        value={validation.values.email || ''}
                        onChange={validation.handleChange}
                        typeError={'email'}
                        error={validation.errors.email}
                        pattern={regex.email}
                    />
                    <LabelWithInput
                        form="logon"
                        type="password"
                        label="Пароль"
                        name="password"
                        value={validation.values.password || ''}
                        onChange={validation.handleChange}
                        typeError={'password'}
                        error={validation.errors.password}
                        minLength="8"
                        maxLength="16"
                    />
                </SectionForm>
            </main>
        </>
    );
}

export default Login;
