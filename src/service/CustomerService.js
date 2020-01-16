import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:8080/customer/';

class CustomerService {

    fetchCustomers() {
        // console.log('AuthService.getAuthHeader()::: ', AuthService.getAuthHeader())
        return axios.get(`${USER_API_BASE_URL}list-customers`, AuthService.getAuthHeader());
    }

    addCustomer(customer) {
        return axios.post(`${USER_API_BASE_URL}add-customer`, customer, AuthService.getAuthHeader());
    }

}

export default new CustomerService();