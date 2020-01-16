import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/user/';

class AuthService {


    login(credentials) {
        return axios.post(`${USER_API_BASE_URL}login`, credentials)
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
        let token = '';
        let userInfo = this.getUserInfo();
        if (userInfo) {
            token = userInfo.data.token
        }
        return {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'signup', {}, this.getAuthHeader());
    }
}

export default new AuthService();