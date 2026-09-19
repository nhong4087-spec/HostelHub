import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// B2: gan JWT tu authStore vao moi request.
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('hostelhub_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Tra thang phan body cua ApiResponse cho tang goi.
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message ||
      'Khong ket noi duoc toi server. Kiem tra backend da chay chua.';
    return Promise.reject(new Error(message));
  }
);

export default axiosClient;
