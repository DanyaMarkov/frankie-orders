import style from "./AuthForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { authUser } from "@api/auth";
import { observer } from "mobx-react-lite";
import authStore from "@store/auth-store";

type Inputs = {
    example: string;
    username: string;
    password: string;
    loginError: string;
};

const LoginForm = observer(() => {
    const { setAuthUser, setAuthToken } = authStore;

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm<Inputs>();

    const setAuthError = () => {
        setError("loginError", {
            type: "validate", // тип ошибки
            message: "Неудачная попытка авторизации", // текст сообщения об ошибке
        });

        setTimeout(() => {
            clearErrors("loginError");
        }, 1500);
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await authUser(data);
        if (response) {
            localStorage.setItem("authToken", response);
            localStorage.setItem("userName", data.username);
            setAuthToken(response);
            setAuthUser(data.username);
        } else {
            setAuthError();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.formField}>
                <input type="text" placeholder="username" {...register("username", { required: true })} />
                {errors.username && <span>Введите имя пользователя</span>}
            </div>
            <div className={style.formField}>
                <input type="password" placeholder="password" {...register("password", { required: true })} />
                {errors.password && <span>Введите пароль</span>}
            </div>
            {errors.loginError && <span>{errors.loginError.message}</span>}
            <button className={style.actionButton} type="submit">
                Войти
            </button>
        </form>
    );
});

export default LoginForm;
