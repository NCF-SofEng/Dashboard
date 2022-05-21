import '../styles/Sidebar.css';

import logo from "../assets/images/redtidedash_logo.png";
import analysislogo from "../assets/svgs/analysis.svg"
import dashboardlogo from "../assets/svgs/dashboard.svg";
import chatlogo from "../assets/svgs/chatboard.svg";
import {Link} from "react-router-dom";

/**
 * Main navigation bar to move between dashboard/analysis/chatboard routes.
 * @return {JSX.Element}
 * @author DG
 * @author EF
 */
export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="LogoBox">
                <Link to="/"><img className="Logo" src={logo} alt="Fish with RedTide on it"></img></Link>
            </div>
            <div className="SidebarDivider" />
            <div className="NavElementContainer">
                <Link className="NavElement" to="/">
                    <img className="NavElementIcon" src={dashboardlogo} alt=""></img>
                    <div className="NavElementText">Dashboard</div>
                </Link>
            </div>
            <div className="NavElementContainer">
                <Link className="NavElement" to="/analysis">
                    <img className="NavElementIcon" src={analysislogo} alt=""></img>
                    <div className="NavElementText">Analysis</div>
                </Link>
            </div>
            <div className="NavElementContainer">
                <Link className="NavElement" to="/chatboard">
                    <img className="NavElementIcon" src={chatlogo} alt=""></img>
                    <div className="NavElementText">Chatboard</div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;