import axios from 'axios'
import authHeader from './auth-header'

const API_URL = `https://hairsalonec.herokuapp.com/api`

const instance = axios.create({
    baseURL: API_URL,
    headers: authHeader()
  });

const requests = {
    del: (url, param) => instance.delete(`${url}`, { params: { 'id': param } }),
    get: (url) => instance.get(`${url}`),
    put: (url, body) => instance.put(`${url}`, body),
    post: (url, body) => instance.post(`${url}`, body),
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
    putService: (data) => requests.put('services', {
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description,
        category: {
            id: data.category.id,
            name: data.category.name
        }
    }),
    deleteService: (id) => requests.del(`services/${id}`),
    getServiceByID: (id) => requests.get(`services/${id}`),
    postServiceImage: (id, file) => requests.post(`services/upimg/${id}`, file),
}

///////////////////////////////////////APPOINTMENTS///////////////////////////////////////////////

const Appointment = {
    getAppointment: () => requests.get('bills'),
    deleteAppointment: (id) => requests.del(`services/${id}`),
    getAppointmentByID: (id) => requests.get(`services/${id}`),
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