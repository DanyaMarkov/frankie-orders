import style from "./AuthForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string;
    name: string;
    username: string;
    password: string;
};

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
            <button className={style.actionButton} type="submit">
                Зарегистрироваться
            </button>
        </form>
    );
};

export default RegisterForm;
