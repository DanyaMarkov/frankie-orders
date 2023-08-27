import MenuLink from "./MenuLink/MenuLink";
import style from "./SidebarMenu.module.scss";

const SidebarMenu = () => {
    return (
        <nav className={style.menu}>
            <div className={style.menuList}>
                <MenuLink
                    title="Заказы"
                    path="orders"
                    icon={
                        <path d="M19 3.022C19 3.014 19 3.008 19 3V1C19 0.734784 18.8946 0.48043 18.7071 0.292893C18.5196 0.105357 18.2652 0 18 0C17.7348 0 17.4804 0.105357 17.2929 0.292893C17.1054 0.48043 17 0.734784 17 1V2.1C16.6709 2.03317 16.3358 1.99966 16 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H11V1C11 0.734784 10.8946 0.48043 10.7071 0.292893C10.5196 0.105357 10.2652 0 10 0C9.73478 0 9.48043 0.105357 9.29289 0.292893C9.10536 0.48043 9 0.734784 9 1V2H8C7.66415 1.99966 7.32913 2.03317 7 2.1V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V3V3.022C4.38078 3.48437 3.8777 4.08454 3.53057 4.77498C3.18343 5.46543 3.00178 6.2272 3 7V19C3.00159 20.3256 3.52888 21.5964 4.46622 22.5338C5.40356 23.4711 6.67441 23.9984 8 24H16C17.3256 23.9984 18.5964 23.4711 19.5338 22.5338C20.4711 21.5964 20.9984 20.3256 21 19V7C20.9982 6.2272 20.8166 5.46543 20.4694 4.77498C20.1223 4.08454 19.6192 3.48437 19 3.022ZM19 19C19 19.7956 18.6839 20.5587 18.1213 21.1213C17.5587 21.6839 16.7956 22 16 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.31607 20.5587 5 19.7956 5 19V7C5 6.20435 5.31607 5.44129 5.87868 4.87868C6.44129 4.31607 7.20435 4 8 4H16C16.7956 4 17.5587 4.31607 18.1213 4.87868C18.6839 5.44129 19 6.20435 19 7V19ZM17 8C17 8.26522 16.8946 8.51957 16.7071 8.70711C16.5196 8.89464 16.2652 9 16 9H8C7.73478 9 7.48043 8.89464 7.29289 8.70711C7.10536 8.51957 7 8.26522 7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8ZM17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12ZM13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17H8C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15H12C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16Z" />
                    }
                />
                <MenuLink
                    title="Посылки"
                    path="parcels"
                    icon={
                        <path d="M20.527 4.2169L14.5 0.736897C13.7394 0.299519 12.8774 0.0693359 12 0.0693359C11.1226 0.0693359 10.2606 0.299519 9.49999 0.736897L3.47299 4.2169C2.71387 4.65681 2.08347 5.28822 1.64477 6.04805C1.20607 6.80788 0.974428 7.66952 0.972992 8.5469V15.5069C0.974454 16.3844 1.20609 17.2462 1.64478 18.0062C2.08347 18.7661 2.71386 19.3977 3.47299 19.8379L9.49999 23.3169C10.2605 23.7546 11.1226 23.9849 12 23.9849C12.8774 23.9849 13.7395 23.7546 14.5 23.3169L20.527 19.8379C21.2861 19.3977 21.9165 18.7661 22.3552 18.0062C22.7939 17.2462 23.0255 16.3844 23.027 15.5069V8.5469C23.0256 7.66952 22.7939 6.80788 22.3552 6.04805C21.9165 5.28822 21.2861 4.65681 20.527 4.2169ZM10.5 2.4699C10.956 2.20659 11.4734 2.06797 12 2.06797C12.5266 2.06797 13.0439 2.20659 13.5 2.4699L19.527 5.9489C19.6798 6.0455 19.8234 6.15596 19.956 6.2789L13.763 9.8539C13.2268 10.163 12.6189 10.3257 12 10.3257C11.3811 10.3257 10.7731 10.163 10.237 9.8539L4.04399 6.2789C4.17656 6.15596 4.32017 6.0455 4.47299 5.9489L10.5 2.4699ZM4.47299 18.1049C4.0172 17.8408 3.63875 17.4617 3.3755 17.0054C3.11226 16.5491 2.97346 16.0317 2.97299 15.5049V8.5469C2.97994 8.36674 3.00371 8.18763 3.04399 8.0119L9.23699 11.5869C9.78393 11.898 10.3803 12.1128 11 12.2219V21.7909C10.8273 21.738 10.6599 21.669 10.5 21.5849L4.47299 18.1049ZM21.027 15.5049C21.0265 16.0317 20.8877 16.5491 20.6245 17.0054C20.3612 17.4617 19.9828 17.8408 19.527 18.1049L13.5 21.5849C13.3401 21.669 13.1727 21.738 13 21.7909V12.2219C13.6197 12.1128 14.2161 11.898 14.763 11.5869L20.956 8.0119C20.9963 8.18763 21.02 8.36674 21.027 8.5469V15.5049Z" />
                    }
                />
                <MenuLink
                    title="Сотрудники"
                    path="employees"
                    icon={
                        <path d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519943 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C23.9966 15.1815 22.7312 18.2318 20.4815 20.4815C18.2318 22.7312 15.1815 23.9966 12 24ZM12 2.00001C10.0222 2.00001 8.08879 2.5865 6.4443 3.68531C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80689 19.0679 4.93215C17.1931 3.05742 14.6513 2.00292 12 2.00001ZM8.00001 14C7.84394 13.9993 7.68988 14.0351 7.55015 14.1047C7.41042 14.1742 7.2889 14.2754 7.19531 14.4003C7.10171 14.5252 7.03865 14.6702 7.01116 14.8239C6.98368 14.9775 6.99253 15.1354 7.03701 15.285C7.3953 16.3325 8.06136 17.2475 8.94809 17.9103C9.83482 18.5731 10.9009 18.9529 12.007 19C13.1135 18.9564 14.1808 18.5778 15.0675 17.9145C15.9542 17.2511 16.6187 16.3342 16.973 15.285C17.013 15.1356 17.0186 14.9791 16.9893 14.8273C16.96 14.6754 16.8966 14.5322 16.8038 14.4084C16.7111 14.2847 16.5914 14.1836 16.4539 14.1129C16.3164 14.0421 16.1646 14.0035 16.01 14H8.00001ZM6.00001 10C6.00001 11 6.89501 11 8.00001 11C9.10501 11 10 11 10 10C10 9.46957 9.78929 8.96087 9.41422 8.58579C9.03915 8.21072 8.53044 8.00001 8.00001 8.00001C7.46957 8.00001 6.96086 8.21072 6.58579 8.58579C6.21072 8.96087 6.00001 9.46957 6.00001 10ZM14 10C14 11 14.895 11 16 11C17.105 11 18 11 18 10C18 9.46957 17.7893 8.96087 17.4142 8.58579C17.0391 8.21072 16.5304 8.00001 16 8.00001C15.4696 8.00001 14.9609 8.21072 14.5858 8.58579C14.2107 8.96087 14 9.46957 14 10Z" />
                    }
                />
            </div>
        </nav>
    );
};

export default SidebarMenu;
