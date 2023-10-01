import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={`navbar ${isDrawerOpen ? "drawer-open" : ""}`}>
      <div className="logo">React Tech</div>

      <div className="menu-icon" onClick={toggleDrawer}>
        <div className={`bar ${isDrawerOpen ? "open" : ""}`} />
        <div className={`bar ${isDrawerOpen ? "open" : ""}`} />
        <div className={`bar ${isDrawerOpen ? "open" : ""}`} />
        <div className={`bar ${isDrawerOpen ? "open" : ""}`} />
      </div>

      {/* Navigation items */}
      <ul className={`nav-items ${isDrawerOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signal-state">SIgnal</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
