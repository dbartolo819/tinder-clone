import axios from 'axios'

const instance = axios.create({
  baseURL: "https://tinder-clone-for-backend.herokuapp.com",
});

export default instance;