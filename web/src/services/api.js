import axios from 'axios';

import UseUser from '../utils/useUser';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createUser = async (name, email, password) => {
  await api.post('/users', {
    name,
    email,
    password,
  });
};

export const sessionAuth = async (email, password) => {
  const { setUser } = UseUser();
  const { data } = await api.post('/sessions', {
    email,
    password,
  });

  console.log(data);
};
