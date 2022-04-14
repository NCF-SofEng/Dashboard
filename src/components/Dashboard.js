import '../styles/Dashboard.css';
import Card from "./Card";

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<Card title="Card 1" bodyType="Twitter"/>
			<Card title="Card 2" bodyType="Twitter"/>
			<Card title="Card 3" bodyType="Twitter"/>
		</div>
	);
}

export default Dashboard;
