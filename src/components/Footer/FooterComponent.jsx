import Logo from "/Logo.svg";
import "./Footer.css";

export const FooterComponent = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/image/footer.png)" }}
    >
      <div className="redes">
        <a href="#">
          <img src="/image/facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/image/twitter.png" alt="Twitter" />
        </a>
        <a href="#">
          <img src="/image/instagram.png" alt="Instagram" />
        </a>
      </div>
      <img src={Logo} alt="org" />
      <p>
        Desarrollado por <a href="https://github.com/AngelOU20">AngelOU20</a>
      </p>
    </footer>
  );
};
