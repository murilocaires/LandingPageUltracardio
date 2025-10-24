import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { Team } from "./components/Team";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Banner } from "./components/Banner";



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
