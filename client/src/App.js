import React from "react";
import MyApp from "./components/main/main";
import Landing from "./components/landing/landing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App()
{
    return(
        <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/MyApp" element={<MyApp />} />
          
        </Routes>
      </Router>
    );
}
export default App;