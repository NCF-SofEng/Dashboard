import "../../styles/twitter/tweet.css";
import { HighlightRegex } from "../utilities/HighlightRegex";

function parseDate(string) {
    const stamp = Date.parse(string);

    // Calculate the amount of hours ago this date was.
    const hoursAgo = Math.floor((Date.now() - stamp) / 3600000);

    if (hoursAgo < 1) {
        return "Just now";
    } else if (hoursAgo < 48) {
        return `${hoursAgo} hours ago`;
    } else {
        return `${Math.floor(hoursAgo / 24)} days ago`;
    }
}

export const Tweet = ({ tweet }) => {
    return (
        <div className="TweetContainer" key={tweet.id}>
            <div className="User">
                <img 
                    className="ProfilePicture" src={tweet.user.profile_image_url}
                    alt={tweet.user.name + " twitter icon."}
                ></img>
                <div className="ProfileInfo">
                    <div className="UserName">{tweet.user.name}</div>
                    <div className="ScreenName">@{tweet.user.screen_name} - {parseDate(tweet.created_at)}</div>
                </div>
            </div>
            <div className="Content">
                <div className="TweetText">{
                    HighlightRegex(tweet.text, 
                        /#[a-zA-Z\d]+/,
                        /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/,
                        /@[a-zA-Z\d]+/
                    )}
                </div>
            </div>
        </div>
    );
}