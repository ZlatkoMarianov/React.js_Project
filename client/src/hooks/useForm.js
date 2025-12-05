import { useState } from "react";

export default function useForm(initialValues, submitHandler) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const register = (fieldName) => {
        return {
            name: fieldName,
            value: values[fieldName],
            onChange: changeHandler,
        };
    };

    const formAction = async (formData) => {
        await submitHandler(values, formData);
    };

    return {
        values,
        register,
        formAction,
    };
}