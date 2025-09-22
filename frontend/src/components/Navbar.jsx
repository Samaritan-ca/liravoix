import { Link } from "react-router-dom";
import { layout } from "../styles/commonStyles";

export default function Navbar({ onLoginClick }) {
  return (
    <nav style={layout.nav}>
      <div>
        <Link to="/" style={layout.link}>Home</Link>
        <Link to="/reading" style={layout.link}>Reading</Link>
        <Link to="/grammar" style={layout.link}>Grammar</Link>
        <Link to="/vocabulary" style={layout.link}>Vocabulary</Link>
        <Link to="/account" style={layout.link}>Account</Link>
      </div>
      <button onClick={onLoginClick} style={layout.button}>Login</button>
    </nav>
  );
}
