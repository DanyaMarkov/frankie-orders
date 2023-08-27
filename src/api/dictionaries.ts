import dictionariesStore from "@store/dictionaries-store";

export const getDictionaries = async () => {
  try {
    const response = await serverData;
    dictionariesStore.setDictionaries(response);
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка при отправке данных на сервер');
  }
}

const serverData = {
  "warehouse": [
    {
      "id": 1,
      "name": "США",
      "country": "USA"
    }
  ]
}