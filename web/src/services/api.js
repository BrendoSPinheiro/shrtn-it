import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createUser = async (name, email, password) => {
  const { data } = await api.post('/users', {
    name,
    email,
    password,
  });

  console.log(data);
};
