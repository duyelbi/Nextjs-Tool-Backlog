import { API_KEY, BACK_LOG_URL } from "../constants";

export const buildUrl = (
  backLogUrl: string,
  apiKey: string,
  endpoint: string,
  params?: Record<string, any>
) => {
  let url = `${backLogUrl}/api/v2/${endpoint}?apiKey=${apiKey}`;

  if (params) {
    const query = new URLSearchParams(params).toString();
    url += `&${query}`;
  }

  return url;
};

export const fetchData = async (url: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.message || "An error occurred while fetching data."
      );
    }

    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};
