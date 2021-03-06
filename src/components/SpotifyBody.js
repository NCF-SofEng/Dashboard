import "../styles/SpotifyBody.css";
import {useEffect, useState} from "react";

/**
 * Card body that specializes in displaying spotify media.
 * @return {JSX.Element}
 * @author DG
 */
const SpotifyBody = () => {
    // States to hold dynamic content
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Call our express api and store results in react states.
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

    if (!isLoaded) { // If the fetch fails we display the error
        return <div className="Loading">Loading episodes...</div>;
    } else {
        if (error) {
            return <div className="Error">{error}</div>;
        } else {
            return (
                <div className="SpotifyBody">
                    {
                        // Populate iframes using episode state
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