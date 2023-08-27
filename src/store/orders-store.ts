import { getOrderInfoById } from './../api/orders';
import { getOrdersApi } from "@api/orders";
import { makeAutoObservable } from "mobx";

class OrdersStore {
    ordersList = [];
    currentOrder: any = {};

    constructor() {
        makeAutoObservable(this);
    }

    setOrdersList = (data: any) => {
        this.ordersList = data;
    }
    setCurrentOrder = (data: any) => {
        this.currentOrder = data;
    }

    getOrders = async () => {
        const data = await getOrdersApi();
        this.setOrdersList(data);        
        return data;
    }

    getOrderInfo = async (id: number) => {
        const data = await getOrderInfoById(id);
        this.setCurrentOrder(data);        
        return data;
    }

    createOrder = async (newOrder: any) => {
        console.log('newOrder', newOrder)
        // const data = await createNewOrder(newOrder);
    }
}

export default new OrdersStore();