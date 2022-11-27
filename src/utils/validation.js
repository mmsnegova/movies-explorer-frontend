import React, { useCallback, useEffect, useState } from 'react';
export default function useFormWithValidation() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = React.useState({
        name: '',
        email: '',
        password: '',
    });
    const [isValid, setIsValid] = React.useState(true);

    useEffect(() => {
        if (!values) {
            setIsValid(false);
        }
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (
            newValues = { name: '', email: '', password: '' },
            newErrors = {},
            newIsValid = false
        ) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );
    return {
        values,
        setValues,
        handleChange,
        errors,
        setIsValid,
        isValid,
        resetForm,
    };
}
