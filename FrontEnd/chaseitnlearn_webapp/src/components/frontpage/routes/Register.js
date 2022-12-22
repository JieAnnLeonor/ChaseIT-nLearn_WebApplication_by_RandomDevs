import React, {useState} from "react";
import Navbar from "../contents/Navbar";
import Footer from "../contents/Footer";
import "../designs/SignUp.css"
import { Link } from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
    }
  
    return (
      <>
      <Navbar />
  
      <div className="auto-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" placeholder="full name"></input>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
          <Link to="/signup">
          <button type="submit">Register</button>
          </Link>        
        </form>  
        <div className="link-btn">
          <Link to="/signup">
            <button type="click"> Already have an account? Login here.</button>
          </Link>
        </div>      
      </div >   
      <Footer />
      </>
    );
  };
  export default Register;
  