import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { 
  FaCalendarAlt, FaLightbulb, FaBrain, FaSmile, FaBed, FaDumbbell, FaBook, FaUserCircle 
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bottom-navbar">
      <ul className="nav-links">
        <li><Link to="/"><FaCalendarAlt className="icon" /><span>Day</span></Link></li>
        <li><Link to="/meditation"><FaBrain className="icon" /><span>Meditation</span></Link></li>
        <li><Link to="/mood"><FaSmile className="icon" /><span>Mood</span></Link></li>
        <li><Link to="/sleep"><FaBed className="icon" /><span>Sleep</span></Link></li>
        <li><Link to="/exercise"><FaDumbbell className="icon" /><span>Exercise</span></Link></li>
        <li><Link to="/journal"><FaBook className="icon" /><span>Journal</span></Link></li>
        <li><Link to="/tip"><FaLightbulb className="icon" /><span>Tip of the Day</span></Link></li>
        <li><Link to="/profile"><FaUserCircle className="icon" /><span>Profile</span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

