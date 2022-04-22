import "../styles/Card.css";
import TwitterBody from "./TwitterBody";
import AdvisoryBody from "./AdvisoryBody";
import SpotifyBody from "./SpotifyBody"
import ChartBody from "./ChartBody";

const Card = ({title, bodyType, extras}) => {
  let body;
  switch (bodyType) {
    case "twitter":
      body = <TwitterBody />;
      break;
    case "advisory":
      body = <AdvisoryBody />;
      break;
    case "spotify":
      body = <SpotifyBody />;
      break;
    case "chart":
      body = ChartBody(...extras);
      break;
    case "wrap":
      body = extras[0];
    default:
      body = <div>No body</div>;
  }

  return (
    <div className="Card">
      {/* If title then make a div for the title */}
      {title && <div className="title">{title}</div>}
      <div className="body">{body}</div>
    </div>
  );
}

export default Card;