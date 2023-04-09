import api from '../api';

export const getCurrencyByBase = async (params) => {
  try {
    const res = await api.get(`${process.env.NEXT_PUBLIC_API_CONTENT}/api/v1/currency/rates`, {
      params,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
