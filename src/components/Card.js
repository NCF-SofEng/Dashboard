import "../styles/Card.css";
import TwitterBody from "./TwitterBody";
import HealthBody from "./HealthBody";
import SpotifyBody from "./SpotifyBody"
import ChartBody from "./ChartBody";
import YoutubeBody from "./YoutubeBody";

/**
 * Represents a card within the dashboard
 * @param {string} title - The title of the card
 * @param {string} bodyType - The body type of the card
 * @param {string} description - The card description
 * @param extras
 * @return {JSX.Element}
 * @author DG
 */
const Card = ({title, bodyType, description, extras}) => {
    let body;
    switch (bodyType) {
        case "custom":
            body = <></>
            break;
        case "twitter":
            body = <TwitterBody />;
            break;
        case "health":
            body = <HealthBody />;
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
            body = <YoutubeBody/>
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
            {description && <div className="CardDescription"><div className="CardDescriptionContent">{description}</div></div>}
        </div>
    );
}

export default Card;