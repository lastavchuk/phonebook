import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
    instance.defaults.headers.Authorization = '';
};

//----- user -----
export const loginUser = async userData => {
    const { data } = await instance.post('/users/login', userData);
    setToken(data.token);
    return data;
};

export const registerUser = async userData => {
    const { data } = await instance.post('/users/signup', userData);
    setToken(data.token);
    return data;
};

export const logOutUser = async () => {
    const { data } = await instance.post('/users/logout');
    clearToken();
    return data;
};

export const currentUser = async () => {
    const { data } = await instance.get('/users/current');
    return data;
};

//----- contacts -----
export async function fetchAllContacts() {
    const { data } = await instance.get('/contacts');
    return data;
}

export async function addContact(contact) {
    console.log('contact :>> ', contact);
    const { data } = await instance.post('/contacts', contact);
    return data;
}
export async function deleteContact(id) {
    const { data } = await instance.delete(`/contacts/${id}`);
    return data;
}
