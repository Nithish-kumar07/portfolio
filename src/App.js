import React, { useState, useEffect,} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import './Images/splashscreen.css';
import QRCodeGenerator from "./Components/QRCodeGenerator";
import Enrollment from "./Components/Hero/Enrollment";
import PasswordValidator from "./Components/Passwordvalidator";

const App = () => {
  const [ss, setSS] = useState(true); 
  const [effect, setEffect] = useState("");

  useEffect(() => {
    const effects = ["fade-out", "slide-up", "zoom-out", "rotate-out"];
    setEffect(effects[Math.floor(Math.random() * effects.length)]);
    const timer = setTimeout(() => setSS(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {ss ? (
        <div className={`ss ${effect}`}>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/QRcode" element={<QRCodeGenerator />} />
            <Route path="/Enrollement" element={<Enrollment />} />
            <Route path="/Password" element={<PasswordValidator />} />
          </Routes>
        </Router>
        
      )}
    </>
  );
};

export default App;