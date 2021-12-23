import axios from 'axios'
import authHeader from './auth-header'

const API_URL = `https://hairsalonec.herokuapp.com/api`

const instance = axios.create({
    baseURL: API_URL,
    headers: authHeader()
});

const getAgency = () => {
    return instance
        .get(API_URL + '/agencies')
}


const getService = () => {
    return instance
        .get(API_URL + '/services')
}

const getStylist = () => {
    return instance
        .get(API_URL + '/employees')
}

const getFreeSlot = (stylistID, dateID) => {
    return instance
        .get(API_URL + '/shift/check', {
            params: {
                employeeId: stylistID,
                shiftDate: dateID
            }
        })
}

const payment = (info) => {
    return instance
        .post(API_URL + '/bills/pay/paypal/', info )
}


export default { getAgency, getService, getStylist, getFreeSlot, payment }