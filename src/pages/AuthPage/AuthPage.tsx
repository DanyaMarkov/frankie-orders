import style from "./AuthPage.module.scss";
import Logo from "@components/Logo/Logo";
import { NavLink, useLocation } from "react-router-dom";
import LoginForm from "./AuthForms/LoginForm";
import RegisterForm from "./AuthForms/RegisterForm";

const AuthPage = () => {
    let location = useLocation();

    return (
        <div className={style.auth}>
            <Logo />
            {location.pathname === "/auth" && <LoginForm />}
            {location.pathname === "/registration" && <RegisterForm />}
            <div className={style.linkBlock}>
                {location.pathname === "/auth" ? (
                    <span>
                        Нет аккаунта? <NavLink to={"registration"}>Зарегистрируйтесь</NavLink>
                    </span>
                ) : (
                    <span>
                        Вернуться к<NavLink to={"auth"}> авторизации</NavLink>
                    </span>
                )}
            </div>
        </div>
    );
};

export default AuthPage;
