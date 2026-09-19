import axiosClient from './axiosClient';

const healthApi = {
  check: () => axiosClient.get('/health'),
};

export default healthApi;
