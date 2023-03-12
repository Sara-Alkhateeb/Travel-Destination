import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
    return (
        <div id='navbar'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/alldestination">alldestination</Link>
            </nav>
        </div>

    )
}
export default Navbar;