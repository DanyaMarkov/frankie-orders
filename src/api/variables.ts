import axios from 'axios';

const mainApiUrl = 'https://eshoping-ee7c78b14230.herokuapp.com';

export const axiosInstance = axios.create({
  baseURL: mainApiUrl,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    'Content-Type': 'application/json'
  }
});
