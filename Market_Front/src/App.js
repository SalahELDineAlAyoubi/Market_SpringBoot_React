
 
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
 import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { useLocalStorage } from 'react-use-storage';
import Users from './components/Users/Users';
 
function App() {
    const data = useSelector((state) => state.authReducer.authData);
  const [islogin, setislogin, removeislogin] = useLocalStorage("islogin");

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route
          path="/login"
          element={data?.user? <Navigate to="../" /> : <Login />}
        ></Route>
        <Route
          path="/users"
          element={data?.user? <Users/> : <Navigate to="../" />   }
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
