import logo from "../assets/site-logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header>
      <nav>
        <img src={logo} alt="site logo" />
        <h1>{title}</h1>
        <ul>
          <li>
            <Link to="../pages/PageHome.js">Home</Link>
          </li>
          <li>
            <Link to="../pages/PageAbout.js">About</Link>
          </li>
          <li>
            <Link to="../pages/PageFavorites.js">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
