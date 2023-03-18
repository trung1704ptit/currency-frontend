import api from '../api';

export const getCurrencyByBase = async (params) => {
  try {
    const res = await api.get(`${process.env.API_CONTENT}/v1/currency/map`, {
      params,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
