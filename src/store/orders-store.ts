import { getOrderInfoById } from './../api/orders';
import { getOrdersApi } from "@api/orders";
import { makeAutoObservable } from "mobx";
import { axiosInstance } from '@api/variables';

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

        if (data) {
            this.setOrdersList(data);        
        }
        return data;
    }

    getOrderInfo = async (id: number) => {
        const data = await getOrderInfoById(id);
        this.setCurrentOrder(data);        
        return data;
    }

    createOrder = async (newOrder: any) => {
        try {    
            const serverResponse: any = await axiosInstance.post('/api/order', newOrder).then(response => {
            //   console.log('response ====', response);
              return response;
            })
              .catch(error => {
              console.log('error: ', error);
            });
        
            return serverResponse;
            
          } catch (error) {
            console.error(error);
            throw new Error('Ошибка при отправке данных на сервер');
        }
    }
    
}

export default new OrdersStore();