import CustomButton from "@components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import style from "./Comment.module.scss";

type CommentType = {
    comment: string;
};

interface ICommentProps {
    comment: CommentType;
    productIndex: number;
    changeProduct: any;
    removeProduct: any;
    productKey: any;
}

const Comment: React.FC<ICommentProps> = ({ comment, productIndex, changeProduct, removeProduct, productKey }) => {
    const [productObj, setProductObj] = useState(comment);

    const changeLocal = (field: any, value: any) => {
        setProductObj((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    useEffect(() => {
        changeProduct(productKey, productObj);
    }, [productObj]);

    return (
        <div className={style.product}>
            <div className={style.productHeader}>
                <h2>Комментарий {productIndex + 1}</h2>
                <CustomButton color="#FB3A3A" onClick={() => removeProduct(productKey)}>
                    Удалить
                </CustomButton>
            </div>
            <div className={style.mainInfo}>
                <div className={style.formField}>
                    <label>Комментарий </label>
                    <input
                        type="text"
                        value={productObj.comment}
                        onChange={(e) => changeLocal("comment", e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Comment;
