import * as React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import Chatboard from "./components/Chatboard";
import Dashboard from "./components/Dashboard";
import logo from "./redtidedash_logo.png";

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <Link to="/"><img style={{width: "150px"}} src={logo} alt="Logo"/></Link>
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