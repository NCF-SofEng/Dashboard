import '../styles/Chatboard.css';
import {useEffect, useState} from "react";
import Form from "./Form";

const Chatboard = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/messageboard/getMessages")
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setPosts(result.data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			).finally(() => setUpdated(true))
	}, [updated])

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Tweets are loading...</div>;
	} else {
		return (
			<div className="Chatboard">
				<div className="ChatboardContent">
					<div className="ChatboardPosts">{
						posts.map((post, index) => {
							return (
								<div className="ChatboardPost" key={index}>
									<div className="PostTitle">Title: {post.title}</div>
									<div className="PostContent">Content: {post.message}</div>
									{post.location !== null &&
										<div className="PostLocation">Location: {post.location}</div>
									}
									<div className="PostDate">Posted: {new Date(post.date).toLocaleString()}</div>

									{post.attachment !== null &&
										// TODO: figure out why image isn't being saved in backend correctly
										<div className="PostImage">Image: <img src={post.attachment} alt="Redtide related"/></div>
									}
									<br/>
								</div>
							);
						})
					}</div>

					<div className="ChatboardNewPost"><Form updated={setUpdated}/></div>
				</div>
			</div>
		);
	}
}

export default Chatboard;