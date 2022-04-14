import "../styles/Card.css";
import TwitterBody from "../components/TwitterBody";

const Card = ({ title, bodyType }) => {

	const selectBody = (bodyType) => {
		if (bodyType === "Twitter")
			return <TwitterBody />
	}

	return(
		<div className="Card">
			<div className="title">{title}</div>
			<div className="body">{selectBody(bodyType)}</div>
		</div>
	);
}

export default Card;