import Header from "/image/Header.png";
import "./Header.css";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <img src={Header} className="img" alt="Org" />
    </header>
  );
};
