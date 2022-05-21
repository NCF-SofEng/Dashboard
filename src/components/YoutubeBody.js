import "../styles/YoutubeBody.css";
import { useEffect, useState } from "react";
// D.R. and D.G. 
//this class represents the body of the youtube card, and everything that goes into how it works. It uses react states to 
// change the youtube video without reloading the entire page.
const YoutubeBody = () => {
    //this react state represents the current video being displayed within the iframe.
    const [currentVideo, setCurrentVideo] = useState(0); 
    // this react state represents the array of videos to be used for the iframe
    const [videos, setVideos] = useState([]);
    // this react state represents when the irame itself is loaded
    const [isLoaded, setIsLoaded] = useState(false);
    // this react state represents when something goes wrong.
    const [error, setError]  = useState(null);
    //when the website launches, this function pulls all the videos from our database.
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
    // this function intakes an integer as a parameter and updates the video depending on whether the user wants to go to the next video or a previous video.
    // which returns a 1 or a -1.
    const updateVideo = (integer) => {
        //this if statement prevents an out of bounds error from occuring in case a user wants to go to a previous video or a next video
        //when there is no next or previous video available.
        if (currentVideo + integer >= 0 && currentVideo + integer < videos.length){
            setCurrentVideo(currentVideo + integer);
        }
    }
    // loads the iframe if there is no error.
    if (isLoaded) {
        if (!error) {
            return (
                <div>
                    {/*sets the current video to the first one in the array*/}
                    <div className="YoutubeCurrentVideo">Current Video: {currentVideo + 1}/{videos.length}</div>
                    {/*adds a button that allows the user to go to the next video*/}
                    <div className="YoutubeButton" onClick={() => updateVideo(1)}>
                        Next
                    </div>
                    {/*adds a button that allows the user to go to a previous button*/}
                    <div className="YoutubeButton" onClick={() => updateVideo(-1)}>
                        Prev
                    </div>
                    {/*creates the iframe, whose video is determined by the currentVideo state*/}
                    <iframe className="YoutubeVideoIframe" src={"https://www.youtube.com/embed/" + videos[currentVideo].id.videoId} title="YouTube video player" allowFullScreen></iframe>
                </div>);
        } else {
            {/*returns an error if something is wrong*/}
            return <div className="Error">{error}</div>;
        }
    } else {
        {/*displays a loading message while the iframe is loading*/}
        return <div className="Loading">Youtube videos loading...</div>;
    }

}

export default YoutubeBody