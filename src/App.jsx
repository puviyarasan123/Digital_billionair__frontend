import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPasswordFlow from "./Pages/Forgot_passwordflow";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Forgot_passwordflow" element={<ForgotPasswordFlow/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
