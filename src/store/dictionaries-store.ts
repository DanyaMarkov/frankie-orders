import { makeAutoObservable } from "mobx";

type dictionariesType = {
    warehouse: any;
}
class DictionariesStore {
    constructor() {
        makeAutoObservable(this);
    }

    dictionaries: dictionariesType = {warehouse: {}};

    setDictionaries = (dictionary: any) => {
        this.dictionaries = dictionary ;
    }

}

export default new DictionariesStore();