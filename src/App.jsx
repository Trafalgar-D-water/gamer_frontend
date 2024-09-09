import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProfilePage from './components/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import VerifyEmail from './components/VerifyEmail';

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/api/user/verify-email' element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
