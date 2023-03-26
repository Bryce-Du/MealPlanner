import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import Profile from './features/profile/Profile';
import ProfileForm from './features/profile/ProfileForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/user/:id/edit" element={<ProfileForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
