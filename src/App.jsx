import Home from './pages/Home/Home';
import { Route , Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { useEffect } from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth , async (user) => {
      if(user) {
        console.log(user.displayName ? user.displayName : 'successfully logged in !' )
        toast.success(user.displayName ? user.displayName : 'successfully logged in !')
        navigate('/');
      } else {
        console.log('logged out');
        navigate('/login');
      }
    })
  } , [])

  return (
    <div>
    <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
