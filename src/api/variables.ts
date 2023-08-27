import axios from 'axios';

export const mainApiUrl = 'https://prikolchiktyt.sobaka';

const token = localStorage.getItem('authToken');

export const axiosInstance = axios.create({
  baseURL: mainApiUrl,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

// // Пример GET-запроса с bearer token
// axiosInstance.get('/your_endpoint')
//   .then(response => {
//     // Обработка успешного ответа
//   })
//   .catch(error => {
//     // Обработка ошибки
//   });