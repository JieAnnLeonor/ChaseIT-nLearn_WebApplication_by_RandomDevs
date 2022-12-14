import Navbar from "../Navbar";
import Footer from "../Footer";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../Login.css"

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
    <Navbar />
     <div className="auto-form-container1">     
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

        <div className="btn1">
          <Link to="/studentdashboard">
            <button type="submit">Login as Student</button>
          </Link>
          <Link to="/teacherdashboard">
            <button type="submit">Login as Teacher</button>
          </Link>     
        </div>

      </form>
        <div className="link-btn1">
          <Link to="/register">
            <button type="click"> Don't have an account? Register here.</button>
          </Link>
        </div>
      </div>      

    <Footer />
    </>
  );
};
export default SignUp;
