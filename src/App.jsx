import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProfilePage from './components/profile/Profile';
import SignUpPage from './pages/SignUpPage';
import VerifyEmail from './components/VerifyEmail';
// import FriendListNotification from './components/profile/FriendListNotification';

import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/api/user/verify-email' element={<VerifyEmail />} />
          
          {/* Protected routes */}
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/profile' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
