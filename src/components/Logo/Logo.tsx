import style from "./Logo.module.scss";
import logo from "@img/logo/logo.png";

const Logo = () => {
    return (
        <div className={style.logo}>
            <img src={logo} className={style.logoImage} alt="logo" />
            <span className={style.logoTitle}>
                <b>Frankie</b> Orders
            </span>
        </div>
    );
};

export default Logo;
