import '../styles/Sidebar.css';

import logo from "../assets/images/redtidedash_logo.png";

import dashboardlogo from "../assets/svgs/dashboard.svg";
import chatlogo from "../assets/svgs/chatboard.svg";

export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="LogoBox">
                <img className="Logo" src={logo} alt="Fish with RedTide on it"></img>
            </div>
            <div className="SidebarDivider" />
            <div className="NavElementContainer">
                <div className="NavElement">
                    <img className="NavElementIcon" src={dashboardlogo} alt=""></img>
                    <div className="NavElementText">Dashboard</div>
                </div>
            </div>
            <div className="NavElementContainer">
                <div className="NavElement">
                    <img className="NavElementIcon" src={chatlogo} alt=""></img>
                    <div className="NavElementText">Chatboard</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;