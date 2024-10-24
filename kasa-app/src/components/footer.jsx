import "../sass/footer.scss";
import LogoFoot from "../assets/LOGO-FOOT.png";

function Footer() {
    return (
        <div className="footer">
            <img src={LogoFoot} alt="Logo" />
            <div className="copyright">
                <p>© 2020 Kasa. </p>
                <p> All rights reserved</p>
            </div>
        </div>
    );
  }
  
  export default Footer;