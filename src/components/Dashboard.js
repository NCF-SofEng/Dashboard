import '../styles/Dashboard.css';
import Card from "./Card";

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<h1>This is the Dashboard route.</h1>
			<Card title="Card 1" body="Body 1"/>
		</div>
	);
}

export default Dashboard;
