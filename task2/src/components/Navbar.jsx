import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cart } = useContext(StoreContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">MiniStore</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/cart">
                🛒 Cart <span className="badge bg-primary">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
