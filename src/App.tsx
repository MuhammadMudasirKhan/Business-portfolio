import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Element } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="bg-aventus-navy min-h-screen">
        <Nav />
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </Router>
  );
}