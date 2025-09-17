import { Link } from "react-router-dom";
import { layout } from "../styles/commonStyles";

export default function Navbar({ onLoginClick }) {
  return (
    <nav style={{ marginBottom: "2rem" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/reading" style={{ marginRight: "1rem" }}>Reading</Link>
      <Link to="/account" style={{ marginRight: "1rem" }}>Account</Link>
      <button onClick={onLoginClick} style={layout.button}>Login</button>
    </nav>
  );
}
