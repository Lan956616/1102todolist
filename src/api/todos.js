import axios from 'axios';

const BASE_URL = 'https://todo-list.alphacamp.io/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  },
);

export const getTodos = async () => {
  try {
    const res = await axiosInstance.get(`${BASE_URL}/todos`);
    return res.data.data;
  } catch (error) {
    console.error('[get todos failed]:', error);
  }
};

export const createTodo = async (payload) => {
  try {
    const { title, isDone } = payload;
    const res = await axiosInstance.post(`${BASE_URL}/todos`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.error('[create todo failed:]', error);
  }
};

export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;
  try {
    const res = await axiosInstance.patch(`${BASE_URL}/todos/${id}`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.error('[patch todo failed]:', error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await axiosInstance.delete(`${BASE_URL}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error('[delete todo failed]:', error);
  }
};
