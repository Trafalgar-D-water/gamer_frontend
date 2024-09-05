import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='Login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
