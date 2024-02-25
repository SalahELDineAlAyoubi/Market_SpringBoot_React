
 
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
 import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar  />

      <Routes>
       <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/> }></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
