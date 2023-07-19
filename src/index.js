import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import './login.css';





import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Loginpage from './pages/login';

import Homepage from './pages/home';





function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Loginpage />} />
      
      <Route path="/homepage" element={<Homepage />} />
      
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));