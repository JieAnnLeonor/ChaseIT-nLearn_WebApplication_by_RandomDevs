import Hero from "../Hero";
import Navbar from "../Navbar";
import HomeImg from "../assets/homep.png";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="E-learning for Youth Success"
        text="Enjoy a self-paced learning with ChaseIT’nLearn. 
          Explore our different creative courses with lots 
          fun and engaging activities that await you. 
          Master any subject, one success at a time."
        btnText="LET'S GO"
        url="/"
        btnClass="show"
      />
      <Footer />
    </>
  );
}

export default Home;
