import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">Fast React Pizza Co.</Link>
      <p>Guy Kopel</p>
    </header>
  );
}

export default Header;
