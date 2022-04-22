import "../../styles/twitter/tweet.css";
import { HighlightRegex } from "../utilities/HighlightRegex";

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
                    <div className="ScreenName">@{tweet.user.screen_name}</div>
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