import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to= "/">Home</Link>
                <Link to= "/create">New Blog</Link>
                {/* <a href="/">Home</a>        //Before using React Router!
                <a href="/create">New Blog</a> */}
            </div>

        </nav>
     );
}
 
export default Navbar;

