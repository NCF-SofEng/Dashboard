import '../styles/Card.css';

const Card = ({ title, body }) => {
	return(
		<div className="Card">
			<h2>This is a Card Component</h2>
			<p>Card Title: {title}</p>
			<p>Card Body: {body}</p>
		</div>
	);
}

export default Card;