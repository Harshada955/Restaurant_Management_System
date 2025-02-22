import nodeClient from "./node-client";

export const fetchAllMenus = async () => {
    try {
        const response = await nodeClient.get("/menu/fetchAll");
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong!" };
    }
}