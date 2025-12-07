import { useState } from "react";

export default function useForm(initialValues, submitHandler, validateMovie) {
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (fieldName, value) => {
        if (validateMovie[fieldName]) {
            return validateMovie[fieldName](value);
        }
        return null;
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));

        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prevValues => ({
                ...prevValues,
                [name]: error
            }));
        }
    };

    const handleBlur = (e) => {
        const [name, value] = e.target;

        setTouched(prevTouched => ({
            ...prevTouched,
            [name]: true
        }));

        const error = validateField(name, value);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));
    };

    const register = (fieldName) => {
        return {
            name: fieldName,
            value: values[fieldName] || '',
            onChange: changeHandler,
            onBlur: handleBlur,
        };
    };

    const formAction = async (formData) => {
        const newErrors = {};
        let hasErrors = false;

        Object.keys(validateMovie).forEach(fieldName => {
            const error = validateField(fieldName, values[fieldName]);
            if (error) {
                newErrors[fieldName] = error;
                hasErrors = true;
            }
        });

        const allTouched = {};
        Object.keys(validateMovie).forEach(fieldName => {
            allTouched[fieldName] = true;
        });

        setTouched(allTouched);
        setErrors(newErrors);

        if(hasErrors) {
            return
        }

        await submitHandler(values, formData);
    };

    return {
        values,
        register,
        formAction,
        errors,
        touched,
    };
}