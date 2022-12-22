import "../designs/FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <h1 className="footer-logo">
          <img src={require("../assets/logo111.png")} alt="logo" />
        </h1>
        <p className="footer-txt">
          An emerging technology through web application that sustain topnotch
          learning and improve overall development.
        </p>
        <div>
          <a href="/">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-behance"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Licence</a>
          <a href="/">RandomDevs</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
