import * as React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import Chatboard from "./components/Chatboard";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/chatboard">Chatboard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chatboard" element={<Chatboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;