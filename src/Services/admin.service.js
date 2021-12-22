import axios from 'axios'
import authHeader from './auth-header'

const API_URL = `https://hairsalonec.herokuapp.com/api`

const requests = {
    del: (url, param) => axios.delete({url:`${API_URL}/${url}`}, { params: { 'id': param } }, { headers: authHeader() }),
    get: (url) => axios.get(`${API_URL}/${url}`, { headers: authHeader() }),
    put: (url, body) => axios.put(`${API_URL}/${url}`, body , { headers: authHeader() }),
    post: (url, body) => axios.post(`${API_URL}/${url}`, body , { headers: authHeader() }),
};

///////////////////////////////////////CLIENTS//////////////////////////////////////////////////////

const Client = {
    getClient: () => requests.get('clients'),
    postClient: (data) => requests.post('clients',data),
    putClient: (data) => requests.put('clients',data),
    deleteClient: (id) => requests.del(`clients`, id),
    getClientByID: (id) => requests.get(`clients/${id}`)
}

///////////////////////////////////////SERVICES/////////////////////////////////////////////////////

const Service = {
    getService: () => requests.get('services'),
    postService: (data) => requests.post('services',data),
    putService: (data) => requests.put('services',data),
    deleteService: (id) => requests.del(`services/${id}`),
    getServiceByID: (id) => requests.get(`services/${id}`),
    postServiceImage: () => 1,
}

///////////////////////////////////////APPOINTMENTS///////////////////////////////////////////////

const Appointment = {
    getAppointment: () => requests.get('services'),
    postAppointment: (data) => requests.post('services',data),
    putSAppointment: (data) => requests.put('services',data),
    deleteAppointment: (id) => requests.del(`services/${id}`),
    getAppointmentByID: (id) => requests.get(`services/${id}`),
    postServiceImage: () => 1,
}

///////////////////////////////////////AGENCY/////////////////////////////////////////////////////

const Agency = {
    getAgency: () => requests.get('agencies'),
    postAgency: (data) => requests.post('agencies',data),
    putAgency: (data) => requests.put('agencies',data),
    deleteAgency: (id) => requests.del(`agencies/${id}`),
    getAgencyByID: (id) => requests.get(`agencies/${id}`),
    postAgencyImage: () => 1,
}

///////////////////////////////////////STAFF/////////////////////////////////////////////////////

const Employee = {
    getEmployee: () => requests.get('employees'),
    postEmployee: (data) => requests.post('employees',data),
    putEmployee: (data) => requests.put('employees',data),
    deleteEmployee: (id) => requests.del(`employees/${id}`),
    getEmployeeByID: (id) => requests.get(`employees/${id}`),
}

///////////////////////////////////////STAFF_SHIFT///////////////////////////////////////////////


export default { Client, Service, Agency, Appointment, Employee }