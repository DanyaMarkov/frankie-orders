import ContentWrapper from "@components/ContentWrapper/ContentWrapper";
import CustomButton from "@components/CustomButton/CustomButton";
import CustomTable from "@components/CustomTable/CustomTable";
import Search from "@components/Search/Search";
import ordersStore from "@store/orders-store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./OrdersPage.module.scss";
import { tableOrdersConfig } from "./tableConfig";

const Orders = observer(() => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredOrders, setFilteredOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { getOrders, ordersList } = ordersStore;

    const navigate = useNavigate();

    useEffect(() => {
        getOrders().then((response) => {
            if (response) {
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    }, []);

    useEffect(() => {
        if (searchValue.length > 0) {
            setFilteredOrders(
                ordersList.filter((el: any) => {
                    return el.name.toLowerCase().includes(searchValue.toLowerCase());
                })
            );
            return;
        }
        setFilteredOrders(ordersList);
    }, [searchValue, loading]);

    return (
        <ContentWrapper title="Заказы">
            <div className={style.orders}>
                <div className={style.ordersHeader}>
                    <Search value={searchValue} setValue={setSearchValue} />
                    <CustomButton onClick={() => navigate("createOrder")} color="#f1463b">
                        Новый заказ
                    </CustomButton>
                </div>
                <CustomTable
                    tableConfig={tableOrdersConfig}
                    tableData={filteredOrders}
                    loading={loading}
                    tableActions={[
                        {
                            buttonTitle: "Открыть",
                            onClickAction: (id) => navigate(String(id)),
                        },
                    ]}
                />
            </div>
        </ContentWrapper>
    );
});

export default Orders;
