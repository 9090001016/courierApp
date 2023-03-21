import "./App.css";
import Mynavbar from "./Mynavbar";
import Blog from "./components/Blog";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Mynavbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
