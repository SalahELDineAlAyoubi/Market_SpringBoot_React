
 
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
 import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
      <Navbar  />

      <Routes>
       <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={!user ?<Login/> :<Navigate to="../" /> }></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
