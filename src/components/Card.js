import "../styles/Card.css";
import TwitterBody from "./TwitterBody";
import AdvisoryBody from "./AdvisoryBody";
import SpotifyBody from "./SpotifyBody"

const Card = ({title, bodyType}) => {

  const selectBody = (bodyType) => {
    if (bodyType === "twitter")
      return <TwitterBody/>;
    else if (bodyType === "advisory")
      return <AdvisoryBody/>;
    else if (bodyType === "spotify")
      return <SpotifyBody/>;
  }

  return (
    <div className="Card">
      <div className="title">{title}</div>
      <div className="body">{selectBody(bodyType)}</div>
    </div>
  );
}

export default Card;