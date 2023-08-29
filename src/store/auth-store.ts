import { registerUser } from '@api/auth';
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

    async registerNewUser(data: any) {
        const response = await registerUser(data);
        console.log('response ....', response)
        // if (response) {
        //     return response.data.code
        // }
    }
}

export default new AuthStore();