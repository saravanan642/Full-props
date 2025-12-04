import Contact from "./Compontents/Contact";
import Footer from "./Compontents/Footer";
import Header from "./Compontents/Header";
import Home from "./Compontents/Home";
import Nave from "./Compontents/Nave";
import Pagenotfound from "./Compontents/Pagenotfound";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Nave" element={<Nave />} />
        {/* <Route path='*' element={<Pagenotfound />} /> */}
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
