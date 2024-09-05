
const API_BASE_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:3004/api";

const apiEndPoints = {
  user: {
    login: `${API_BASE_URL}/user/login`,
    signup: `${API_BASE_URL}/user/signup`,
  },
  post: {
    // aother api end point here
  },
};

export default apiEndPoints;
