import Icon from "@components/Icon/Icon";
import { NavLink } from "react-router-dom";
import style from "./MenuLink.module.scss";

interface MenuLinkProps {
    path: string;
    icon: React.SVGProps<SVGPathElement>;
    title: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ path, icon, title }) => {
    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? style.activeLink : style.link)}>
            <Icon iconPath={icon} />
            <span>{title}</span>
        </NavLink>
    );
};

export default MenuLink;
