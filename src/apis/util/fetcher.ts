import axios from "axios";

const fetcher = (url: string) => {
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => new Error(err));
};

export default fetcher;
