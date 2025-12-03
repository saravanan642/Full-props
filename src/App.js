import Contact from "./Compontents/Contact";
import Footer from "./Compontents/Footer";
import Header from "./Compontents/Header";
import Home from "./Compontents/Home";
import Nave from "./Compontents/Nave";
import Pagenotfound from "./Compontents/Pagenotfound";


function App() {
  return (
    <div className="App">
      <Header />

      <Home />
      <Contact />
      <Nave />

      <Footer />
      <Pagenotfound />
    </div>
  );
}

export default App;
