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

    const { getOrders, ordersList } = ordersStore;

    const navigate = useNavigate();

    useEffect(() => {
        getOrders();
    }, []);

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
                    tableData={ordersList}
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
