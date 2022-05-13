import '../styles/Chatboard.css';
import {useEffect, useState} from "react";
import locationlogo from "../assets/svgs/location.svg";
import placeholderAttachment from "../assets/images/chatboard_placeholder_image.png";
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
                                                <img src={placeholderAttachment} alt="placeholder"/>
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