import axios from 'axios'
import authHeader from './auth-header'

const API_URL = `https://hairsalonec.herokuapp.com/api`


const getAgency = () => {
    return axios
        .get(API_URL + '/agencies', {
            headers: authHeader()
        })
}


const getService = () => {
    return axios
        .get(API_URL + '/services', {
            headers: authHeader()
        })
}

const getStylist = () => {
    return axios
        .get(API_URL + '/employees', { headers: authHeader() })
}

const getFreeSlot = (stylistID, dateID) => {
    return axios
        .get(API_URL + '/shift/check', {
            headers: authHeader(), params: {
                employeeId: stylistID,
                shiftDate: dateID
            }
        })
}

const payment = ({ info }) => {
    return axios
        .post(API_URL + '/bills/pay/paypal/', {
            headers: authHeader(), data: {
                clientPhone: info.clientPhone,
                employeeId: info.choosenStylistID,
                paymentId: 5,
                status: false,
                idServices: info.choosenServiceID,
                shiftId: info.choosenSlotID
            }
        })
}


export default { getAgency, getService, getStylist, getFreeSlot, payment }