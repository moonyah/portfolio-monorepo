import axios from "axios";
import { testData } from "../types/testDataTypes";

const API_URL = "http://host.docker.internal:5000/";

export const fetchData = async (): Promise<testData> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
