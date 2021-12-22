import axios from 'axios'
import authHeader from './auth-header'

const API_URL = `https://hairsalonec.herokuapp.com/api`

///////////////////////////////////////CLIENTS///////////////////////////////////////////////////////
const getClient = () => {
    return axios
        .get(API_URL + '/clients', {
            headers: authHeader()
        })
}

const postClient = (client) => {
    return axios
        .post(API_URL + '/clients', {
            headers: authHeader(),
            data: client
        })
}

const putClient = (client) => {
    return axios
        .put(API_URL + '/clients', {
            headers: authHeader(),
            data: client
        })
}

const deleteClient = (client) => {
    return axios
        .delete(API_URL + '/clients', {
            headers: authHeader(),
            data: client
        })
}

const getClientByID = (id) =>{
    return axios
        .get(API_URL + '/clients' + `/${id}`, {
            headers: authHeader(),
        })
}

const getAgency = () => {
    return axios
        .get(API_URL + '/agencies', {
            headers: authHeader()
        })
}

///////////////////////////////////////SERVICES/////////////////////////////////////////////////////
const getService = () => {
    return axios
        .get(API_URL + '/services', {
            headers: authHeader()
        })
}

const postService = (client) => {
    return axios
        .post(API_URL + '/services', {
            headers: authHeader(),
            data: client
        })
}

const putService = (client) => {
    return axios
        .put(API_URL + '/services', {
            headers: authHeader(),
            data: client
        })
}

const deleteService = (client) => {
    return axios
        .delete(API_URL + '/services', {
            headers: authHeader(),
            data: client
        })
}

const getServicetByID = (id) =>{
    return axios
        .get(API_URL + '/services' + `/${id}`, {
            headers: authHeader(),
        })
}

const postImageService = () =>{

}

export default { getAgency, getClient, postClient, putClient, deleteClient, getClientByID }