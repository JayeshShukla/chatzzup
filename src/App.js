import "./styles.css";
import { Home, Login, Signup } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import app from "./config/fire";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
