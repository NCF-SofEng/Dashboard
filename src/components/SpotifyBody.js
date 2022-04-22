import "../styles/SpotifyBody.css";

const SpotifyBody = () => {
  return (
    <div className="SpotifyBody">
      <iframe style={{border: 0, borderRadius: "12px"}} title="SpotifyPlaylist"
              src="https://open.spotify.com/embed/playlist/33PAH14e83xTvAsv4irStG?utm_source=generator&theme=0"
              width="100%" height="1225" allowFullScreen=""
              allow="fullscreen"/>
    </div>
  );
}

export default SpotifyBody;