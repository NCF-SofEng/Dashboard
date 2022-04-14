import '../styles/Dashboard.css';
import Card from "./Card";

const Dashboard = () => {
	return (
		<>
			<div className="Advisory">
				<Card title="Advisories" bodyType="advisory" />
			</div>
			<div className="Dashboard">
				<Card title="Spotify" bodyType="spotify" />
				<Card title="Twitter" bodyType="twitter" />
			</div>
		</>
	);
}

export default Dashboard;
