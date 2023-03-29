import axios from "axios";

const baseURL = process.env.REACT_APP_URL;
const kakaoKey = process.env.REACT_APP_KAKAO_KEY;
const userToken = localStorage.getItem('accessToken')

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${userToken}`,
    "Content-type": "application/json",
  },
});

export const signUp = async (code) => {
  try {
    const response = await instanceUtil.get(`/user/signin/?code=${code}`);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};


export const getUserInfo = async () => {
  try {
    const response = await instance.get(`/user/auth/`);
    
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const writeBook = async data => {
  try {
    const response = await instance.post(`/book/write/`, data);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const getBookList = async () => {
  try {
    const response = await instance.get(`/book/view`);
    
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};