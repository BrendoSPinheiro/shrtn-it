import axios from 'axios';

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

export const deleteUrl = async (id, token) => {
  const auth = `Bearer ${token}`;
  await api.delete(`/urls/${id}`, {
    headers: { Authorization: auth },
  });
};

export const createUrl = async (token, { title, full_url }) => {
  const auth = `Bearer ${token}`;

  const contentData = {
    title,
    full_url,
  };
  const { data } = await api.post('/urls', contentData, {
    headers: { Authorization: auth },
  });

  return data;
};

export const detailsUrl = async (token, { id }) => {
  const auth = `Bearer ${token}`;

  const { data } = await api.get(`/urls/${id}`, {
    headers: { Authorization: auth },
  });

  if (!data) return;
  return data;
};
