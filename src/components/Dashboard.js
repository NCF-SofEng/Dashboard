import '../styles/Dashboard.css';
import Card from "./Card";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="Dashboard">
            {Sidebar()}
            <div className="DashboardContent">
                <div className="Dashboard">
                    <div className="CardLayout">
                        <div className="MainContent">
                            <div className="Advisory">
                                <Card title="Advisories" bodyType="advisory" />
                            </div>
                        </div>
                        <div className="MediaStack">
                            <Card title="Twitter" bodyType="twitter" />
                            <Card title="Spotify" bodyType="spotify" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
