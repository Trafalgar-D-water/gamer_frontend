
const API_BASE_URL = "http://localhost:3004/api";

const apiEndPoints = {
  user: {
    login: `${API_BASE_URL}/user/login`,
    signup: `${API_BASE_URL}/user/signup`,
    verifyemaill : `${API_BASE_URL}user/verify-email`,
  },
  post: {
    // aother api end point here
  },
};

export default apiEndPoints;
