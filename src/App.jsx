import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import { LoginPage } from './pages/LoginPage';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import ProfilePage from './components/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import VerifyEmail from './components/VerifyEmail';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/api/user/verify-email' element={<VerifyEmail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
