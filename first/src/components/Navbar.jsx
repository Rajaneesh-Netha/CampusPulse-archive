import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* Placeholder for CBIT logo */}
          <img src="/placeholder-cbit-logo.png" alt="CBIT Logo" className="cbit-logo" />
        </div>
        
        <div className="navbar-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    </nav>
  );
}
