import AboutUs from "../contents/AboutUs";
import Navbar from "../contents/Navbar";
import Hero from "../contents/Hero";
import Footer from "../contents/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        btnClass="hide"
      />
      <h1 className="aboutTitle">About Us</h1>
      <h1 className="aboutTxt">
        We [RandomDevs] are optimistic for the future where people live more
        informed, more creative lives. We see a world where technology enhances
        human potential, and takes us into a new era of intelligence and
        progress that everyone can benefit from.
      </h1>

      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
