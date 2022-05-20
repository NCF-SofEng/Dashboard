import * as React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.css";
import Chatboard from "./components/Chatboard";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Analysis from "./components/Analysis";

const App = () => {
    return (
        <div className="AppContainer">
            <Router>
                {Sidebar()}
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/analysis" element={<Analysis/>}/>
                    <Route path="/chatboard" element={<Chatboard/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;