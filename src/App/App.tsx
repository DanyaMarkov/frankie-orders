import "./App.css";
import Header from "@components/Header/Header";
import SidebarMenu from "@components/SidebarMenu/SidebarMenu";
import { Route, Routes, useNavigate } from "react-router-dom";
import Orders from "@pages/OrdersPage/OrdersPage";
import { useCallback, useEffect } from "react";
import AuthPage from "@pages/AuthPage/AuthPage";
import { observer } from "mobx-react-lite";
import authStore from "@store/auth-store";
import { getDictionaries } from "@api/dictionaries";
import OrderInfoPage from "@pages/OrderInfoPage/OrderInfoPage";
import CreateOrder from "@pages/CreateOrder/CreateOrder";

const App = observer(() => {
    const navigate = useNavigate();
    const { authToken, setAuthToken } = authStore;

    const checkIsAuth = useCallback(() => {
        const authToken = localStorage.getItem("authToken");
        setAuthToken(authToken ? authToken : "");

        if (!authToken) {
            navigate("auth");
        } else {
            navigate("orders");
            getDictionaries();
        }
    }, [authToken]);

    useEffect(() => {
        checkIsAuth();
    }, [authToken]);

    if (!authToken) {
        return <AuthPage />;
    }

    return (
        <div className="app">
            <Header />
            <SidebarMenu />
            <main>
                <Routes>
                    <Route path="/" element={<Orders />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/orders/:id" element={<OrderInfoPage />} />
                    <Route path="/orders/createOrder" element={<CreateOrder />} />
                </Routes>
            </main>
        </div>
    );
});

export default App;
