import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Or however you manage authentication

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;