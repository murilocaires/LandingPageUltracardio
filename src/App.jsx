import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { Team } from "./components/Team";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
