import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Nav from "./components/Nav.jsx"
import Users from "./pages/Users";

function App() {
  // USE EFFECT NOTES

  // useEffect(() => {
  //   console.log('ONLY on mount')
  // }, [])

  // useEffect(() => {
  //   console.log(`on mount AND on ${showModal} change`)
  // }, [showModal])

  // useEffect(() => {
  //   console.log(`on mount AND EVERY render`)
  // }, )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* DYNAMIC ROUTING */}
        <Route path="/users/:id" element={<Users />} /> 
      </Routes>
    </Router>
  );
}

export default App;
