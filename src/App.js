import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HashimChatbot from "./components/HashimChatbot";


function App() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          
        </Routes>
        <HashimChatbot/>
        <Footer/>
        
      </Router>
    </div>
  );
}

export default App;
