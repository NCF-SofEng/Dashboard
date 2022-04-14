import "../styles/TwitterBody.css";
import {useState} from "react";

const TwitterBody = () => {
  const [tweets, setTweets] = useState({});

  return (
    <div className="TwitterBody">
      {tweets.map((tweet, id) => {
        return (
          <div className="tweet" id={id}>
          {/* TODO: Put some tweet stuff here */}
          </div>
        );
      })}
    </div>
  );
}

export default TwitterBody;