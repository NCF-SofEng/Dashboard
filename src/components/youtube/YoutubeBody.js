import { useEffect, useState } from "react";

const YoutubeBody = () => {
    const [videos, setVideos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError]  = useState(null);
    useEffect(() => {
            fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/youtube/videos")
                .then(response => response.json())
                .then(response => {
                    setIsLoaded(true);
                    setVideos(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                    setError(error);
                });
        },[]
    );
    return (
        <iframe className="YoutubeVideoIframe" src={"https://www.youtube.com/embed/riEQ8KpcXRQ"} title="YouTube video player" allowFullScreen></iframe>
    );
}

export default YoutubeBody