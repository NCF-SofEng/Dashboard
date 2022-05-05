import '../styles/Chatboard.css';
import {useEffect, useState} from "react";
import locationlogo from "../assets/svgs/location.svg"
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
        return <div>Posts are loading...</div>;
    } else {
        return (
            <div className="Chatboard">
                <div className="ChatboardContent">
                    <div className="ChatboardPosts">{
                        posts.slice(0).reverse().map((post, index) => {
                            return (
                                <>
                                    <div className="ChatboardPost" key={index}>
                                        <div className="PostImage">
                                        {
                                            post.attachment ?
                                                <img src={post.attachment} alt="Redtide related"/>
                                                :
                                                <img src="data:image/png;base64,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" alt="placeholder"/>
                                        }
                                        </div>
                                        <div className="PostContent">
                                            <div className="PostTitle">{post.title}</div>
                                            <div className="PostMessage">{post.message}</div>
                                            <div className="PostLocation">
                                                <img src={locationlogo} alt="location icon"/>
                                                {
                                                    post.location ?
                                                        post.location
                                                        :
                                                        "Not Specified"
                                                }
                                            </div>
                                            <div className="PostDate">{new Date(post.date).toLocaleString()}</div>
                                        </div>
                                    </div>
                                    {/* Don't draw horizontal separator for last post */}
                                    {index !== posts.length - 1 && <hr/>}
                                </>
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