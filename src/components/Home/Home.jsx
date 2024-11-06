import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Service />
      <Works/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
