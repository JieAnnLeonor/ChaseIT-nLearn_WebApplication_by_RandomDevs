import Hero from "../Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Pricing() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-price"
        heroImg="https://static.vecteezy.com/system/resources/previews/013/420/484/non_2x/three-tariffs-interface-for-the-site-ui-ux-banner-for-web-app-background-set-offer-tariffs-eps-vector.jpg"
        btnClass="hide"
      />

      <Footer />
    </>
  );
}

export default Pricing;
