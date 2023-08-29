import authStore  from '@store/auth-store';
import { axiosInstance } from './variables';

export const authUser = async (data: any) => {
  const responseData = await axiosInstance.post('/auth/sign-in', data).then(response => {
    return response;
  })
    .catch(error => {
    console.log('error: ', error);
  });

  if (responseData) {
    return responseData.data.token;
  }
};

export const registerUser = async (data: any) => {
  const responseData = await axiosInstance.post('/auth/sign-up', data).then(response => {
    return response;
  })
    .catch(error => {
    console.log('error: ', error);
  });

  return responseData;
}

export const logout = () => {
  const { setAuthUser, setAuthToken } = authStore;
  setAuthToken('');
  setAuthUser('');
  localStorage.setItem('authToken', '')
}