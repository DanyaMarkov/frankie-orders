import ContentWrapper from "@components/ContentWrapper/ContentWrapper";
import CustomButton from "@components/CustomButton/CustomButton";
import dictionariesStore from "@store/dictionaries-store";
import ordersStore from "@store/orders-store";
import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import style from "./CreateOrder.module.scss";
import Product from "./Product/Product";

const CreateOrder = () => {
    const [orderName, setOrderName] = useState<string>("");
    const [warehouse, setWarehouse] = useState<number>(1);
    const [totalCost, setTotalCost] = useState<number>(0);

    const [products, setProducts] = useState<any>({
        0: {
            link: "",
            qty: 1,
            price: 0,
            color: "",
            size: "",
        },
    });
    const [comments, setComments] = useState<any>({});

    const submitCreareOrder = (event: any) => {
        event.preventDefault();

        let itemsArr: any = Object.keys(products).map((productKey) => {
            console.log(" product[key]", products[productKey]);
            return products[productKey];
        });

        let commentsArr: any = Object.keys(comments).map((commentKey) => {
            return comments[commentKey];
        });

        ordersStore.createOrder({
            name: orderName,
            warehouse_id: warehouse,
            items: itemsArr,
            comments: commentsArr,
        });
    };

    const changeProduct = (productIndex: any, updatedObject: any) => {
        setProducts((prevState: any) => ({
            ...prevState,
            [productIndex]: updatedObject,
        }));
    };

    useEffect(() => {
        if (Object.keys(products).length > 0) {
            let total = 0;
            for (const productIndex of Object.keys(products)) {
                total += Math.abs(Number(products[productIndex].price));
            }
            setTotalCost(total);
        }
    }, [products]);

    const addProduct = () => {
        const index = Number(Object.keys(products)[Object.keys(products).length - 1]) + 1;

        setProducts((prevState: any) => ({
            ...prevState,
            [index]: {
                link: "",
                qty: 1,
                price: 0,
                color: "",
                size: "",
            },
        }));
    };

    const removeProduct = (productKey: any) => {
        const {
            [productKey]: {},
            ...rest
        } = products;

        setProducts(rest);
    };

    const changeComment = (productIndex: any, updatedObject: any) => {
        // Обновление объекта в стейте
        setComments((prevState: any) => ({
            ...prevState,
            [productIndex]: updatedObject,
        }));
    };

    const addComment = () => {
        if (Object.keys(comments).length > 0) {
            const index = Number(Object.keys(comments)[Object.keys(comments).length - 1]) + 1;

            setComments((prevState: any) => {
                return {
                    ...prevState,
                    [index]: {
                        comment: "",
                    },
                };
            });

            return;
        }

        setComments({
            0: {
                comment: "",
            },
        });
    };

    const removeComment = (productKey: any) => {
        const {
            [productKey]: {},
            ...rest
        } = comments;

        setComments(rest);
    };

    return (
        <ContentWrapper title="Создание заказа" backButton>
            <div className={style.createOrder}>
                <form className={style.form} onSubmit={submitCreareOrder}>
                    <div className={style.orderInfo}>
                        <div className={style.formField}>
                            <label>Склад</label>
                            <select value={warehouse} onChange={(e: any) => setWarehouse(e.target.value)}>
                                {dictionariesStore.dictionaries.warehouse &&
                                    dictionariesStore.dictionaries.warehouse.map((warehouse: any) => {
                                        return (
                                            <option value={warehouse.id} key={warehouse.id}>
                                                {warehouse.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className={style.formField}>
                            <label>Название заказа</label>
                            <input type="text" value={orderName} onChange={(e) => setOrderName(e.target.value)} />
                        </div>
                        <div className={style.formField}>
                            <label>Общая стоимость заказа</label>
                            <input type="text" disabled value={totalCost} />
                        </div>
                    </div>
                    <div className={style.orderForms}>
                        <div className={style.products}>
                            <div className={style.productsList}>
                                {Object.keys(products).length > 0 &&
                                    Object.keys(products).map((key: any, index: any) => {
                                        return (
                                            <Product
                                                key={key}
                                                product={products[key]}
                                                productIndex={index}
                                                productKey={key}
                                                changeProduct={changeProduct}
                                                removeProduct={removeProduct}
                                            />
                                        );
                                    })}
                            </div>

                            <div className={style.productsFooter}>
                                <CustomButton onClick={() => addProduct()}>Добавить товар</CustomButton>
                            </div>
                        </div>
                        <div className={style.comments}>
                            <h3>Комментарии</h3>
                            <div className={style.commentsList}>
                                {Object.keys(comments).length > 0 &&
                                    Object.keys(comments).map((key: any, index: any) => {
                                        return (
                                            <Comment
                                                key={key}
                                                comment={comments[key]}
                                                productIndex={index}
                                                productKey={key}
                                                changeProduct={changeComment}
                                                removeProduct={removeComment}
                                            />
                                        );
                                    })}
                            </div>

                            <div className={style.productsFooter}>
                                <CustomButton onClick={addComment}>Добавить комментарий</CustomButton>
                            </div>
                        </div>
                    </div>

                    <CustomButton type="submit">Создать заказ</CustomButton>
                </form>
            </div>
        </ContentWrapper>
    );
};

export default CreateOrder;
