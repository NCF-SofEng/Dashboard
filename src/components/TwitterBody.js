import "../styles/TwitterBody.css";

import { Tweet } from "./twitter/Tweet.js";

import {useEffect, useState} from "react";

const TwitterBody = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tweets, setTweets] = useState([]);

  // This will run once every time this component is loaded
  useEffect(() => {
    fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/media/tweets")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTweets(result.data);
        },
        // Handle errors
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Tweets are loading...</div>;
  } else {
    return (
      <div className="TwitterBody">
        {
          tweets.map((tweet) => {
            return Tweet({tweet: tweet})
          })
        }
      </div>
    );
  }
}

export default TwitterBody;
