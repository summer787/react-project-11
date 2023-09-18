import { useEffect, useState } from "react";

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const DEFAULT_OPTIONS = {};

export default function useFetchData(endpoint, options = DEFAULT_OPTIONS) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(endpoint, {
          ...defaultOptions,
          ...options, // method: 'GET'
          signal: controller.signal,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (errorMessage) {
        if (!(errorMessage instanceof DOMException)) {
          setError(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint, options]);

  return { data, isLoading, error };
}
