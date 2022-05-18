import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Students from './Components/Students';
import Home from './Components/Home'

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/students/:name' element={<Students />} />
          </Routes>
      </div>
    </Router>
  )
};

export default App;
