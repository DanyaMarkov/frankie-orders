import CustomButton from "@components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { ProductType } from "../types";
import style from "./Product.module.scss";

interface IProductProps {
    product: ProductType;
    productIndex: number;
    changeProduct: any;
    removeProduct: any;
    productKey: any;
}

const Product: React.FC<IProductProps> = ({ product, productIndex, changeProduct, removeProduct, productKey }) => {
    const [productObj, setProductObj] = useState(product);

    const changeLocal = (field: any, value: any) => {
        // setProductObj(productIndex, productObj);
        setProductObj((prevState) => ({
            ...prevState,
            [field]: value,
            //   object: updatedObject
        }));
    };

    useEffect(() => {
        changeProduct(productKey, productObj);
    }, [productObj]);

    return (
        <div className={style.product}>
            <div className={style.productHeader}>
                <h2>Товар {productIndex + 1}</h2>
                {productIndex > 0 && (
                    <CustomButton color="#FB3A3A" onClick={() => removeProduct(productKey)}>
                        Удалить товар
                    </CustomButton>
                )}
            </div>
            <div className={style.mainInfo}>
                <div className={style.formField}>
                    <label>Ссылка на товар в магазине </label>
                    <input type="text" value={productObj.link} onChange={(e) => changeLocal("link", e.target.value)} />
                </div>
            </div>
            <div className={style.additionalInfo}>
                <div className={style.formField}>
                    <label>Количество</label>
                    <input
                        type="number"
                        placeholder="Количество"
                        value={productObj.qty}
                        min={1}
                        onChange={(e) => changeLocal("qty", Math.abs(Number(e.target.value)))}
                    />
                </div>
                <div className={style.formField}>
                    <label>Стоимость </label>
                    <input
                        type="number"
                        placeholder="Стоимость"
                        value={productObj.price}
                        min={0}
                        onChange={(e) => changeLocal("price", Math.abs(Number(e.target.value)))}
                    />
                </div>
                <div className={style.formField}>
                    <label>Цвет </label>
                    <input
                        type="text"
                        placeholder="Цвет"
                        value={productObj.color}
                        onChange={(e) => changeLocal("color", e.target.value)}
                    />
                </div>
                <div className={style.formField}>
                    <label>Размер</label>
                    <input
                        type="text"
                        placeholder="Размер"
                        value={productObj.size}
                        onChange={(e) => changeLocal("size", e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
