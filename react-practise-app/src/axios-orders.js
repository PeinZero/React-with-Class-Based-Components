import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-beast-41841-default-rtdb.firebaseio.com/'
});

export default instance;