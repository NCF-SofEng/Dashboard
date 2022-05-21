import '../styles/Chatboard.css';
import {useEffect, useState} from "react";
import locationlogo from "../assets/svgs/location.svg";
import placeholderAttachment from "../assets/images/chatboard_placeholder_image.png";
import Form from "./Form";

/**
 * The chatboard component. Allows users to view and create forum posts.
 * @return {JSX.Element}
 * @author DG
 */
const Chatboard = () => {
    // States to hold dynamic content
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [updated, setUpdated] = useState(false);

    // Call our express api and store results in react states.
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

    if (error) { // If the fetch fails we display the error
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) { // If the fetch hasn't completed yet we notify that things are still loading
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
                                            // Because attachments are optional we determine whether one is present
                                            // and if it is we display it and if not we display a placeholder
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
                                                    // Because locations are optional we determine whether one is
                                                    // present and if it is we display it and if not we display that it
                                                    // was not specified upon post creation
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