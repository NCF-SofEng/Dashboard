import "../styles/SpotifyBody.css";
import {useEffect, useState} from "react";

const SpotifyBody = () => {
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/spotify/episodes")
            .then(response => response.json())
            .then(response => {
                setEpisodes(response.data);
                setIsLoaded(true);
            })
            .catch(err => {
                console.error(err);
                setError(err);
            });
    }, [])

    if (!isLoaded) {
        return <div className="Loading">Loading episodes...</div>;
    } else {
        if (error) {
            return <div className="Error">{error}</div>;
        } else {
            return (
                <div className="SpotifyBody">
                    {
                        episodes.map((episode, idx) => {
                            return (<iframe style={{borderRadius: "12px"}} title={`SpotifyEpisode${idx}`} key={idx}
                            src={`https://open.spotify.com/embed/episode/${episode.uri.split(":").slice(-1)}?utm_source=generator`}
                            width="100%" height="232" allowFullScreen=""
                            allow="fullscreen"/>);
                        })
                    }
                </div>
            );
        }
    }
}

export default SpotifyBody;