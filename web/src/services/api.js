import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// eslint-disable-next-line react-hooks/rules-of-hooks

export const createUser = async (name, email, password) => {
  await api.post('/users', {
    name,
    email,
    password,
  });
};

export const sessionAuth = async (email, password) => {
  const { data } = await api.post('/sessions', {
    email,
    password,
  });

  return data;
};

export const listUrls = async (token) => {
  const auth = `Bearer ${token}`;
  const { data } = await api.get('/urls', {
    headers: { Authorization: auth },
  });

  if (!data) return;

  return data;
};
