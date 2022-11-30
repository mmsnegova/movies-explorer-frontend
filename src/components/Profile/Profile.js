import React, { useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormWithValidation from '../../utils/validation';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import LabelWithInput from '../LabelWithInput/LabelWithInput';
import SectionForm from '../SectionForm/SectionForm';
import { regex } from '../../utils/constants';
import './Profile.css';

function Profile(props) {
    const validation = useFormWithValidation();
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        validation.setValues({
            ...validation.values,
            name: currentUser.name,
            email: currentUser.email,
        });
    }, [currentUser]);

    useEffect(() => {
        if (
            validation.values.name === currentUser.name &&
            validation.values.email === currentUser.email
        ) {
            validation.setIsValid(false);
        }
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser({
            ...validation.values,
        });
    }

    return (
        <>
            <HeaderLogin
                onNavMenu={props.onNavMenu}
                isOpenNavMenu={props.isOpenNavMenu}
                type="profile"
                onUpdateUser={props.onUpdateUser}
            />
            <main className="profile">
                <SectionForm
                    form="profile"
                    title={`Привет, ${props.name}!`}
                    textButton="Редактировать"
                    nameButton="exit"
                    textLink="Выйти из аккаунта"
                    path="/"
                    onSubmit={handleSubmit}
                    onSignOut={props.onSignOut}
                    isValid={validation.isValid}
                    isDisabled={props.isDisabled}
                >
                    <LabelWithInput
                        form="profile"
                        type="text"
                        label="Имя"
                        name="name"
                        value={validation.values.name || ''}
                        onChange={validation.handleChange}
                        typeError={'name'}
                        minLength="2"
                        maxLength="30"
                        error={validation.errors.name}
                        defaultValue={props.name}
                        pattern={regex.name}
                        isDisabled={props.isDisabled}
                    />
                    <LabelWithInput
                        form="profile"
                        type="email"
                        label="E-mail"
                        name="email"
                        value={validation.values.email || ''}
                        onChange={validation.handleChange}
                        typeError={'email'}
                        error={validation.errors.email}
                        defaultValue={props.email}
                        pattern={regex.email}
                        isDisabled={props.isDisabled}
                    />
                </SectionForm>
            </main>
        </>
    );
}

export default Profile;
