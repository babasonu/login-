import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <h1> </h1>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1> product list</h1>}></Route>
          <Route path="/add" element={<h1> product list</h1>}></Route>
          <Route path="/update" element={<h1> product list</h1>}></Route>
          <Route path="/logout" element={<h1> product list</h1>}></Route>
          <Route path="/profile" element={<h1> product list</h1>}></Route>
          <Route path="/register" element={<Signup />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
