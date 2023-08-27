import authStore  from '@store/auth-store';
// import { mainApiUrl } from './variables';
// import axios from "axios"

const generateRandomToken = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const authUser = async (data: any) => {
  try {
    // const response = await axiosInstance.post(`/auth/sign-in`, data);
    let token = '';
    if (data.username === '111' && data.password === '111') {
      token = generateRandomToken(10);
    } else {
      token = 'false';
    }
    return token;
    // return response.data; // Возвращаем данные из ответа
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка при отправке данных на сервер');
  }
};

export const registerUser = () => {
  console.log('qqq')
}

export const logout = () => {
  const { setAuthUser, setAuthToken } = authStore;
  setAuthToken('');
  setAuthUser('');
  localStorage.setItem('authToken', '')
}