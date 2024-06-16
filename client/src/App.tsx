
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MyPost from "./pages/MyPost";

function App() {

 
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/my-post" element={<MyPost/>}/>

    </Routes>

   </Router>
  );
}

export default App;
