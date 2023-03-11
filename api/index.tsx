import axios from 'axios';

axios.interceptors.request.use((req: any) => {
  req.meta = req.meta || {};
  req.meta.requestStartedAt = new Date().getTime();
  return req;
});

axios.interceptors.response.use(
  (res: any) => {
    res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
    return res;
  },
  (res) => {
    res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
    throw res;
  },
);


export default axios;