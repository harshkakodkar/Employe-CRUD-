    import axios from 'axios';

    const API_URL = 'http://localhost:4000/api/employees';

    export const fetchEmployees = () => axios.get(API_URL);
    export const fetchEmployee = (id: string) => axios.get(`${API_URL}/${id}`);
    export const createEmployee = (data: any) => axios.post(API_URL, data);
    export const updateEmployee = (id: string, data: any) => axios.put(`${API_URL}/${id}`, data);
    export const deleteEmployee = (id: string) => axios.delete(`${API_URL}/${id}`);
