import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';  // Create a Dashboard component
import Home from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">  {/* Set min-height for full viewport */}
        <Home />
        <div className="d-flex flex-row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />  {/* Add other routes as needed */}
            {/* ...other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
