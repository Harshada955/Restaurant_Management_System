import nodeClient from "./node-client";


export const sendReservation = async (payload) => {
  try {
    const response = await nodeClient.post("/reservation/send", payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong!" };
  }
};
