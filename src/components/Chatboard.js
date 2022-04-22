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
					console.log(result.data)
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			).finally(() => setUpdated(false))
	}, [updated])

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Tweets are loading...</div>;
	} else {
		return (
			<div className="ChatboardBody">
				<h1>Chatboard Route</h1>
				{
					posts.map((post, index) => {
						return (
							<div className="ChatboardPost" key={index}>
								<div className="PostTitle">Title: {post.title}</div>
								{post.location !== null &&
									<div className="PostLocation">Location: {post.location}</div>
								}
								<div className="PostContent">Content: {post.message}</div>
								<br/>
							</div>
						);
					})
				}

				<Form updated={setUpdated}/>
			</div>
		);
	}
}

export default Chatboard;