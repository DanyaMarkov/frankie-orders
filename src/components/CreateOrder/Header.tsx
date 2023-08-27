import { logout } from "@api/auth";
import Icon from "@components/Icon/Icon";
import Logo from "@components/Logo/Logo";
import style from "./Header.module.scss";

const Header = () => {
    const userName = localStorage.getItem("userName") || "User Test";

    return (
        <header className={style.header}>
            <Logo />
            <div className={style.profile}>
                <div className={style.currentUser}>{userName}</div>
                <button onClick={() => logout()}>
                    <Icon
                        iconPath={
                            <>
                                <path d="M14 8V3.5C14 2.673 13.327 2 12.5 2H3.5C2.673 2 2 2.673 2 3.5V19.5C2 20.327 2.673 21 3.5 21H12.5C13.327 21 14 20.327 14 19.5V15H13V19.5C13 19.7761 12.7761 20 12.5 20H3.5C3.22386 20 3 19.7761 3 19.5V3.5C3 3.22386 3.22386 3 3.5 3H12.5C12.7761 3 13 3.22386 13 3.5V8H14Z" />
                                <path d="M18.396 7.854L21.543 11H9V12H21.543L18.396 15.146L19.104 15.854L23.457 11.5L19.104 7.146L18.396 7.854Z" />
                            </>
                        }
                        size={24}
                        hoverColor="#939393"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
