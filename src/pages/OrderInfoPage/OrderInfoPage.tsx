import { Nullable } from "@global/types";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./OrderInfoPage.module.scss";
import ordersStore from "@store/orders-store";
import ContentWrapper from "@components/ContentWrapper/ContentWrapper";

const OrderInfoPage = observer(() => {
    const [orderId, setOrderId] = useState<Nullable<number>>(null);
    const [loading, setLoading] = useState<boolean>(true);

    let { id } = useParams();

    const { currentOrder, getOrderInfo } = ordersStore;

    useEffect(() => {
        if (id) {
            setOrderId(Number(id));
        } else {
            alert("Не удалось получить информацию о заказе с таким ID");
        }
    }, []);

    useEffect(() => {
        if (orderId) {
            setLoading(true);
            getOrderInfo(orderId).then(() => setLoading(false));
        }
    }, [orderId]);

    const orderName = `Заказ №${id}`;

    if (!currentOrder.items || loading) {
        return <div>Загрузка..</div>;
    }

    return (
        <ContentWrapper title={orderName} backButton>
            <div className={style.order}>
                <div className={style.orderName}>{currentOrder.name}</div>
                <div className={style.orderInfo}>
                    <div className={style.orderInfoBlock}>
                        <h4>Статус заказа</h4>
                        <p>{currentOrder.status}</p>
                    </div>
                    <div className={style.orderInfoBlock}>
                        <h4>Название склада</h4>
                        <p>{currentOrder.warehouse_name}</p>
                    </div>
                    <div className={style.orderInfoBlock}>
                        <h4>Общая стоимость</h4>
                        <p>{currentOrder.total}</p>
                    </div>
                    <div className={style.orderInfoBlock}>
                        <h4>Общая стоимость</h4>
                        <p>{currentOrder.total}</p>
                    </div>
                </div>
                <div className={style.items}>
                    <h3>Вещи в заказе:</h3>
                    <div className={style.itemsList}>
                        {currentOrder.items.length > 0 &&
                            currentOrder.items.map((item: any) => {
                                return (
                                    <div className={style.itemsListElement}>
                                        <div className={style.orderInfoBlock}>
                                            <h4>id вещи</h4>
                                            <p>{item.id}</p>
                                        </div>
                                        <div className={style.orderInfoBlock}>
                                            <h4>Стоимость вещи</h4>
                                            <p>{item.price}</p>
                                        </div>
                                        <div className={style.orderInfoBlock}>
                                            <h4>Размер вещи</h4>
                                            <p>{item.size}</p>
                                        </div>
                                        <div className={style.orderInfoBlock}>
                                            <h4>Ссылка на вещь:</h4>
                                            <a href={item.link}>{item.link}</a>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
});

export default OrderInfoPage;
