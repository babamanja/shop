import httpCore from '../httpCore';

export const register = (payload) => {
  const endpoint = httpCore.createFetch({
    url: 'registration',
    method: 'POST',
    data: payload,
  });
  return endpoint();
};

export const login = () => {
  const endpoint = httpCore.createFetch({
    url: 'login',
    method: 'POST',
  });
  return endpoint();
};

export const getUser = () => {
  const endpoint = httpCore.createFetch({
    url: '',
    method: 'GET',
  });
  return endpoint();
};
