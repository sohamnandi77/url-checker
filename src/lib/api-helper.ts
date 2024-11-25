import { AxiosResponse, AxiosError } from "axios";

import { axios } from "@/lib/axios-config";

export const getRequest = async <T extends { id?: string }, R>(
  params: T,
  url: string,
): Promise<R> => {
  try {
    if (params.id && typeof params.id !== "string") {
      throw new Error("id must be a string");
    }
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
  params: Record<string, any> = {},
): Promise<R> => {
  try {
    const response: AxiosResponse<R> = await axios.post(url, data, {
      params,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};
