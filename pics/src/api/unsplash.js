import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID d65ab709a0b460489af39c02d1e8faeca83ca1bd6a97588cc4cf5e2a0d7fa808'
    }
});