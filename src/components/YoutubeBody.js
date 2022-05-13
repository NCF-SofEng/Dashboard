import "../styles/YoutubeBody.css";
import { useEffect, useState } from "react";

const YoutubeBody = () => {
    const [currentVideo, setCurrentVideo] = useState(0); 
    const [videos, setVideos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError]  = useState(null);

    useEffect(() => {
            fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/youtube/videos")
                .then(response => response.json())
                .then(response => {
                    setIsLoaded(true);
                    setVideos(response.data);
                })
                .catch(error => {
                    console.error(error);
                    setError(error);
                });
        },[]);

    const updateVideo = (integer) => {
        if (currentVideo + integer >= 0 && currentVideo + integer < videos.length){
            setCurrentVideo(currentVideo + integer);
        }
    }

    if (isLoaded) {
        if (!error) {
            return (
                <div>
                    <div className="YoutubeCurrentVideo">Current Video: {currentVideo + 1}/{videos.length}</div>
                    <div className="YoutubeButton" onClick={() => updateVideo(1)}>
                        Next
                    </div>
                    <iframe className="YoutubeVideoIframe" src={"https://www.youtube.com/embed/" + videos[currentVideo].id.videoId} title="YouTube video player" allowFullScreen></iframe>
                    <div className="YoutubeButton" onClick={() => updateVideo(-1)}>
                        Prev
                    </div>
                </div>);
        } else {
            return <div className="Error">{error}</div>;
        }
    } else {
        return <div className="Loading">Youtube videos loading...</div>;
    }

}

export default YoutubeBody