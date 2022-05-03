import "../styles/Form.css";
import {useState} from "react";

const Form = ({updated}) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [location, setLocation] = useState("choose");
    const [attachment, setAttachment] = useState(null);

    // Handle form submits
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(attachment);

        // Send post to backend
        fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/messageboard/createMessage", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                title: title,
                message: message,
                location: location,
                attachment: attachment
            })
        }).then((res) => res.json()).then((_res) => {
            // Reset form
            updated(false);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Post Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                Post Content:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                Post Location:

                <select
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="choose" disabled>Location</option>
                    <option value="Sarasota, FL">Sarasota, FL</option>
                    <option value="Tampa, FL">Tampa, FL</option>
                    <option value="Miami, FL">Miami, FL</option>
                    <option value="">No Location</option>
                </select>
                Attach Image:
                <input
                    type="file"
                    accept="image/png,image/jpg,image/jpeg,image/gif"
                    // value={attachment}
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0] && (
                            e.target.files[0].type === "image/png"  ||
                            e.target.files[0].type === "image/jpg"  ||
                            e.target.files[0].type === "image/jpeg" ||
                            e.target.files[0].type === "image/gif")) {
                            setAttachment(e.target.files[0]);
                        } else {
                            alert("Invalid filetype. Please attach a valid filetype or nothing at all.");
                        }
                    }}
                />
            </label>
            <button
                disabled={title === "" || message === "" || location === "choose"}
                type="submit"
                onSubmit={handleSubmit}
            >
                Submit Post
            </button>
        </form>
    );
}

export default Form;