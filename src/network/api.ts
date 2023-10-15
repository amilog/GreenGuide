import axios from "axios";


const api = axios.create({
    baseURL: "https://greenguideapp.onrender.com/api/greenguide/",
  });

  export const getUsers = async () => {
    const response = await api.get("users/get");
    return response.data;
  };
  
  export const getUserById = async (id: string) => {
    const response = await api.get(`users/get/${id}`);
    return response.data;
  };

  export default {
    getUsers,
    getUserById,
  };