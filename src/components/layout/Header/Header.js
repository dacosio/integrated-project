import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ display: "flex" }}>
      <h1>SplitShare</h1>
      <nav>
        <ul style={{ display: "flex", gap: "2rem", listStyleType: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="forgot-password">Forgot Password</Link>
          </li>
          <li>
            <Link to="transaction">Transaction(Private)</Link>
          </li>
          <li>
            <Link to="listing/add">Listing(Private)</Link>
          </li>
          <li>
            <Link to="user">User(Private)</Link>
          </li>
          <li>
            <Link to="testComponent">Test Components</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;