import axios from "axios";

export const Axios = {
  post: async (url: string, body: {}) => {
    try {
      const response = await axios.post(url, body);
      return response;
    } catch (e) {
      return false;
    }
  },
};
