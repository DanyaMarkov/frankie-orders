import style from "./AuthForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "@api/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Inputs = {
    example: string;
    name: string;
    username: string;
    password: string;
    registerError: string;
};

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm<Inputs>();

    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false);

    const setAuthError = () => {
        setError("registerError", {
            type: "validate", // тип ошибки
            message: "Ошибка регистрации, попробуйте другие данные", // текст сообщения об ошибке
        });

        setTimeout(() => {
            clearErrors("registerError");
        }, 1500);
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await registerUser(data);
        if (response) {
            setIsRegister(true);

            setTimeout(() => {
                navigate("auth");
            }, 2400);
        } else {
            setAuthError();
        }
    };

    if (isRegister) {
        return <div>Регистрация прошла успешно</div>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.formField}>
                <input type="text" placeholder="name" {...register("name", { required: true })} />
                {errors.name && <span>Введите ваше имя</span>}
            </div>
            <div className={style.formField}>
                <input type="text" placeholder="username" {...register("username", { required: true })} />
                {errors.username && <span>Введите имя учетной записи</span>}
            </div>
            <div className={style.formField}>
                <input type="password" placeholder="password" {...register("password", { required: true })} />
                {errors.password && <span>Введите пароль</span>}
            </div>

            {errors.registerError && <span>{errors.registerError.message}</span>}

            <button className={style.actionButton} type="submit">
                Зарегистрироваться
            </button>
        </form>
    );
};

export default RegisterForm;
