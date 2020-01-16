import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:8080/user/list/';

class UserService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId, AuthService.getAuthHeader());
    }

}

export default new UserService();