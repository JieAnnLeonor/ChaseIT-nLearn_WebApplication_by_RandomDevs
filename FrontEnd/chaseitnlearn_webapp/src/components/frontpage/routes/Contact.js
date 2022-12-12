import Hero from "../Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-con"
        heroImg="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
