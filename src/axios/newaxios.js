import axios from "axios";

const newaxios = axios.create({
    baseURL : 'http://localhost:3001',
});

newaxios.defaults.headers.post['Content-Type'] = 'application/json';
newaxios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

newaxios.defaults.headers.common['Authorization'] = 'Auth Token';
newaxios.defaults.headers.common['ID'] = 9;

export default newaxios;


