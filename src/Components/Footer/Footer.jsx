import "./Footer.css"

export const Footer = () => {
  let currentTime = new Date();
  return (
    <footer className="footer">
      <span className="copywrite-text">{`Copyright @ ${currentTime.getFullYear()} All rights resreved`}</span>
      <img className="footer-logo" src="/logo.png" alt="logo"></img>
    </footer>
  );
}