import axiosInstance from "./axiosInstance";

// Generic GET API function
export const GET_API = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

// Generic POST API function
export const POST_API = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

// Generic PUT API function
export const PUT_API = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error in PUT request:", error);
    throw error;
  }
};

// Generic DELETE API function
export const DELETE_API = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error);
    throw error;
  }
};
