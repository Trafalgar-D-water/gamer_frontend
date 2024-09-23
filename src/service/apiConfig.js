
const API_BASE_URL = "http://localhost:3004/api";

const apiEndPoints = {
  user: {
    login: `${API_BASE_URL}/user/login`,
    signup: `${API_BASE_URL}/user/signup`,
    verifyemaill : `${API_BASE_URL}user/verify-email`,
    getallUsers : `${API_BASE_URL}/user`,
  },
  post: {
    // aother api end point here
  },
  profile :{
    getAllProfile : `${API_BASE_URL}/profile/@me`,
  },

  friend : {
    create_friend_req : `${API_BASE_URL}/friend/request`
  }
};

export default apiEndPoints;
