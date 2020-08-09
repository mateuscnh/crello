import axios from 'axios';

const url = window.location.hostname === 'localhost' ?
    'http://localhost:3000'
    :
    'https://crelloback.herokuapp.com';

export default axios.create({
    baseURL: url 
})
