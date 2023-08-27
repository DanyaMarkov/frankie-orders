import { makeAutoObservable } from "mobx";

class AuthStore {
    authUser: string = '';
    authToken: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    setAuthUser = (userName: string) => {
        this.authUser = userName;
    }
    setAuthToken = (authToken: string) => {
        this.authToken = authToken;
    }
}

export default new AuthStore();