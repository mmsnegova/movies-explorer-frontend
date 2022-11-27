import React from 'react';
import Header from '../Header/Header';
import useFormWithValidation from '../../utils/validation';
import LabelWithInput from '../LabelWithInput/LabelWithInput';
import SectionForm from '../SectionForm/SectionForm';
import { regex } from '../../utils/constants';
import './Register.css';

function Register(props) {
    const validation = useFormWithValidation();
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister({
            ...validation.values,
        });
        validation.resetForm();
    }

    return (
        <>
            <Header type="logon" />
            <main className="register"></main>
            <SectionForm
                form="logon"
                typeButton="signin"
                title="Добро пожаловать!"
                textButton="Зарегистрироваться"
                nameButton="logon"
                span="Уже зарегистрированы? "
                textLink="Войти"
                path="/signin"
                onSubmit={handleSubmit}
                isValid={validation.isValid}
                isDisabled={props.isDisabled}
            >
                <LabelWithInput
                    form={'logon'}
                    type={'text'}
                    label={'Имя'}
                    name={'name'}
                    value={validation.values.name || ''}
                    onChange={validation.handleChange}
                    typeError={'name'}
                    minLength="2"
                    maxLength="30"
                    error={validation.errors.name}
                    pattern={regex.name}
                />

                <LabelWithInput
                    form={'logon'}
                    type={'email'}
                    label={'E-mail'}
                    name={'email'}
                    value={validation.values.email || ''}
                    onChange={validation.handleChange}
                    typeError={'email'}
                    error={validation.errors.email}
                    pattern={regex.email}
                />
                <LabelWithInput
                    form={'logon'}
                    type={'password'}
                    label={'Пароль'}
                    name={'password'}
                    value={validation.values.password || ''}
                    onChange={validation.handleChange}
                    typeError={'password'}
                    error={validation.errors.password}
                    minLength="8"
                    maxLength="16"
                />
            </SectionForm>
        </>
    );
}

export default Register;
