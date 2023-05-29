import { useState, useEffect } from "react";
import axios from "axios";

// {
//     query: "Python developer in Texas, USA",
//     page: "1",
//     num_pages: "1",
//   }

const useFetch = (endpoint, query) => {
  const [data, setDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "b62b806374mshdc5919d69425b8bp17b9a3jsna8fee5cc5d35",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setDate(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong, please try again later");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
