import { AxiosResponse, AxiosError } from "axios";

import { axios } from "@/lib/axios-config";

interface Params {
  [key: string]: string | number | boolean;
}

export const getRequest = async <R = any>(
  url: string,
  params?: Params,
): Promise<R> => {
  try {
    const response: AxiosResponse<R> = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const postRequest = async <T, R = any>(
  url: string,
  data: T,
  params?: Params,
): Promise<R> => {
  try {
    const response: AxiosResponse<R> = await axios.post(url, data, {
      params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};
