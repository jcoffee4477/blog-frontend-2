import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a>
        <br/>
        <Link to="/about">About</Link> | <Link to="/signup">Sign Up</Link> | <Link to="login">Login</Link> | <Link to="logout">Logout</Link>
        <br/>
        
        <br/>
        
      </nav>
    </header>
  )
}