import api from '../api';

export const getCurrencyByBase = async (params) => {
  try {
    const res = await api.get('http://localhost:5000/v1/currency/map', {
      params,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
