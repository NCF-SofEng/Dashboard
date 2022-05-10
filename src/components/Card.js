import "../styles/Card.css";
import TwitterBody from "./TwitterBody";
import AdvisoryBody from "./AdvisoryBody";
import SpotifyBody from "./SpotifyBody"
import ChartBody from "./ChartBody";

const Card = ({title, bodyType, description, extras}) => {
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
      break;
    case "youtube":
      body = (
        <iframe className="YoutubeVideoIframe" src={extras[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      );
      break;
    default:
      body = <div>No body</div>;
  }

  return (
    <div className="Card">
      {/* If title then make a div for the title */}
      {title && <div className="CardTitle">{title}</div>}
      <div className="body">{body}</div>
      {/* If description then make a div for the description */}
      {description && <div className="CardDescription"><div class="CardDescriptionContent">{description}</div></div>}
    </div>
  );
}

export default Card;