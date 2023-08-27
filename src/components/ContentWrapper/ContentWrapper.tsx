import Icon from "@components/Icon/Icon";
import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ContentWrapper.module.scss";

interface ContentWrapper {
    title: string;
    backButton?: boolean;
    children: ReactNode;
}

const ContentWrapper: React.FC<ContentWrapper> = ({ title, backButton = false, children }) => {
    const navigate = useNavigate();

    const goBack = useCallback(() => navigate(-1), []);

    return (
        <div className={style.contentWrapper}>
            <div className={style.title}>
                {backButton && (
                    <button onClick={goBack}>
                        <Icon
                            color="#fff"
                            hoverColor="#fff"
                            iconPath={
                                <>
                                    <path d="M0.880168 14.09L4.75017 18C4.84313 18.0938 4.95373 18.1681 5.07559 18.2189C5.19745 18.2697 5.32816 18.2958 5.46017 18.2958C5.59218 18.2958 5.72289 18.2697 5.84474 18.2189C5.9666 18.1681 6.0772 18.0938 6.17017 18C6.2639 17.9071 6.33829 17.7965 6.38906 17.6746C6.43983 17.5527 6.46597 17.422 6.46597 17.29C6.46597 17.158 6.43983 17.0273 6.38906 16.9054C6.33829 16.7836 6.2639 16.673 6.17017 16.58L2.61017 13H23.0002C23.2654 13 23.5197 12.8947 23.7073 12.7071C23.8948 12.5196 24.0002 12.2652 24.0002 12C24.0002 11.7348 23.8948 11.4805 23.7073 11.2929C23.5197 11.1054 23.2654 11 23.0002 11H2.55017L6.17017 7.38002C6.34746 7.19405 6.44636 6.94696 6.44636 6.69002C6.44636 6.43308 6.34746 6.186 6.17017 6.00002C6.0772 5.90629 5.9666 5.8319 5.84474 5.78113C5.72289 5.73036 5.59218 5.70422 5.46017 5.70422C5.32816 5.70422 5.19745 5.73036 5.07559 5.78113C4.95373 5.8319 4.84313 5.90629 4.75017 6.00002L0.880168 9.85002C0.318366 10.4125 0.00280762 11.175 0.00280762 11.97C0.00280762 12.765 0.318366 13.5275 0.880168 14.09Z" />
                                </>
                            }
                        />
                    </button>
                )}
                <h1>{title}</h1>
            </div>
            <div className={style.innerContent}>{children}</div>
        </div>
    );
};

export default ContentWrapper;
