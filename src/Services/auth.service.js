import axios from 'axios'
import Storage from './storage'

const API_URL = `https://hairsalonec.herokuapp.com/api`


const register = (username, phonenumber, password, address) => {
    return axios
        .post(API_URL + '/register', {
            name: username,
            phone: phonenumber,
            password: password,
            address: address
        })
}

const login = (phonenumber, password) => {
    return axios
        .get(API_URL + '/login', {
            params: {
                phone: phonenumber,
                password: password
            }
        })
}

const logout = () => {
    localStorage.clear()
}

const getCurrentUser = () => {
    Storage.GetItem("user")
}

export default { register, login, logout, getCurrentUser }