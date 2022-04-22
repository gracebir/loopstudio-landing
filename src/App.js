import About from "./components/About";
import Creations from "./components/Creations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Creations/>
      <Footer/>
    </div>
  );
}

export default App;
