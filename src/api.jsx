import axios from 'axios';

const API_URL = 'https://employee-management-server-5.onrender.com/users'; 

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    return [];
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user', error);
    return null;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    console.error('Error updating user', error);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.error('Error deleting user', error);
    return null;
  }
};
