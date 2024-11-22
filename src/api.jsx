import axios from 'axios';

// Set the base API URL to your Render deployed link
const API_URL = 'https://employee-management-server-5.onrender.com/users';

// Create an Axios instance with a timeout
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Set a timeout of 5 seconds
});

// Fetch all users
export const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return [];
  }
};

// Create a new user
export const createUser = async (user) => {
  try {
    const response = await axiosInstance.post('/', user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.message);
    return null;
  }
};

// Update an existing user
export const updateUser = async (id, user) => {
  try {
    const response = await axiosInstance.put(`/${id}`, user);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error.message);
    return null;
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    await axiosInstance.delete(`/${id}`);
    return id; // Return the ID of the deleted user for reference
  } catch (error) {
    console.error('Error deleting user:', error.message);
    return null;
  }
};