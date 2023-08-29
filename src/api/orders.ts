import { axiosInstance } from './variables';
export const getOrdersApi = async () => {
  try {    
    const serverResponse: any = await axiosInstance.get('/api/order').then(response => {
      // console.log('response ====', response);
      return response;
    });
    // console.log('serverResponse', serverResponse);
    return serverResponse.data.result;
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка при отправке данных на сервер');
  }
}

export const getOrderInfoById = async (id: number) => {
  try {    
    const serverResponse: any = await axiosInstance.get(`/api/order/${id}`).then(response => {
      return response;
    });
    return serverResponse.data.result;
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка при отправке данных на сервер');
  }
}