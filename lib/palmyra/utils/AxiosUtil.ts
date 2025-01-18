import axios, { AxiosInstance } from "axios";

const createAxiosInstance = (): AxiosInstance => {
    return axios.create({
        timeout: 5000
    });
}

export { createAxiosInstance };