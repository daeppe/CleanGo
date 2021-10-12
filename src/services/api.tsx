import axios from "axios";

const productionURL = 'https://json-server-cleango.herokuapp.com/';
// eslint-disable-next-line
const developmentURL = 'http://localhost:5000/V1/';

const api = axios.create({
  baseURL: productionURL,
});

export default api;
