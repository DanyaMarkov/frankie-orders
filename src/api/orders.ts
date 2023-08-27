export const getOrdersApi = async () => {
  try {    
    const response = serverData.result;
    // console.log('response api', JSON.stringify(response));

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка при отправке данных на сервер');
  }
}

export const getOrderInfoById = async (id: number) => {
  try {    
    // тут в запрос просто id вставляем
    console.log(`getOrderById${id}`);
    
    const response = serverOneOrderData.result;
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка при отправке данных на сервер');
  }
}

const serverData = {
  result: [
    {
    "id": 21,
    "name": "Название заказа",
    "status": "ждет потверждение",
    "number": "",
    "warehouse_name": "США",
    "warehouse_id": 1,
    "fee": 0,
    "total": 2000,
    "items": [
      {
        "id": 59,
        "link": "new.com",
        "qty": 10,
        "price": 100,
        "color": "white",
        "size": "10",
        "is_taken": false
      },
      {
        "id": 60,
        "link": "secondNEw.com",
        "qty": 10,
        "price": 100,
        "color": "pink",
        "size": "10",
        "is_taken": false
      }
    ],
    "item_id": [
      "59",
      "60"
    ],
    "comment_id": [
      "5"
    ]
  },
  {
    "id": 22,
    "name": "Название заказа",
    "status": "ждет потверждение",
    "number": "",
    "warehouse_name": "США",
    "warehouse_id": 1,
    "fee": 0,
    "total": 2000,
    "items": [
      {
        "id": 61,
        "link": "new.com",
        "qty": 10,
        "price": 100,
        "color": "white",
        "size": "10",
        "is_taken": false
      },
      {
        "id": 62,
        "link": "secondNEw.com",
        "qty": 10,
        "price": 100,
        "color": "pink",
        "size": "10",
        "is_taken": false
      }
    ],
    "item_id": [
      "61",
      "62"
    ],
    "comment_id": [
      "6"
    ]
  }
  ]
}

const serverOneOrderData = {
    "result": {
      "id": 22,
      "name": "Название заказа",
      "status": "ждет потверждение",
      "number": "",
      "warehouse_name": "США",
      "warehouse_id": 1,
      "fee": 0,
      "total": 2000,
      "items": [
        {
          "id": 61,
          "link": "new.com",
          "qty": 10,
          "price": 100,
          "color": "white",
          "size": "10",
          "is_taken": false
        },
        {
          "id": 62,
          "link": "secondNEw.com",
          "qty": 10,
          "price": 100,
          "color": "pink",
          "size": "10",
          "is_taken": false
        }
      ],
      "item_id": [
        "61",
        "62"
      ],
      "comment_id": [
        "6"
      ],
      "comments": [
        {
          "id": 6,
          "name": "Test",
          "comment": "Hello"
        }
      ]
    }
  
}

