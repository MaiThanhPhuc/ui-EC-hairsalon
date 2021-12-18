import axios from 'axios';

export default axios.create({
  baseURL: `https://hairsalonec.herokuapp.com/api`
});