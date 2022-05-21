import "../styles/Form.css";
import {useState} from "react";

// Collection of coastal florida counties that are likely to be affected by red tide
const florida_counties = [
    "Escambia", "Levy", "Miami-Dade",
    "Santa", "Rosa", "Citrus", "Broward",
    "Okaloosa", "Hernando", "Palm", "Beach",
    "Walton", "Pasco", "Martin",
    "Bay", "Pinellas", "St. Lucie",
    "Gulf", "Hillsborough", "Indian", "River",
    "Franklin", "Manatee", "Brevard",
    "Wakulla", "Sarasota", "Volusia",
    "Jefferson", "Charlotte", "Flagler",
    "Taylor", "Lee", "St. Johns",
    "Dixie", "Collier", "Duval",
    "Monroe", "Nassau"
]

/**
 * Form for creating a new chatboard post
 * @param updated - A setState passed down from parent component to live update new posts
 * @return {JSX.Element}
 * @author DG
 */
const Form = ({updated}) => {
    // States to hold dynamic content
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [location, setLocation] = useState("choose");
    const [attachment, setAttachment] = useState(null);

    // Handle form submits by sending form data to backend through a fetch
    const handleSubmit = (e) => {
        e.preventDefault();

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
            setTitle("");
            setMessage("");
            setLocation("choose");
            setAttachment(null);
        });
    }

    /**
     * Convert attached image file into a base64 string for storage in the backend
     * @param file - File to be converted to base64
     * @return {Promise<unknown>}
     */
    const ToBase64 = (file) => {
        return new Promise((resolve) => {
            const fr = new FileReader();
            fr.onloadend = () => {resolve(fr.result);}
            fr.readAsDataURL(file);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 style={{textAlign: "center"}}>What is your redtide experience?</h1>
            <div className="TitleInput">
                <label htmlFor="title">Title:<br/></label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="MessageInput">
                <label htmlFor="message">Message:<br/></label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className="LocationInput">
                <label htmlFor="location">Location:<br/></label>
                <select
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="choose" disabled>Location</option>
                    {florida_counties.sort().map((county, index) => {
                        const full_county = county.concat(" County, FL");
                        return <option key={index} value={full_county}>{full_county}</option>;
                    })}
                    <option value="">No Location</option>
                </select>
            </div>
            <div className="AttachmentInput">
                <div id="attached_image">
                    {attachment &&
                        <img src={attachment} alt="Attached"/>
                    }
                </div>
                <label htmlFor="attachment">Attach Image:</label>
                <input
                    type="file"
                    id="attachment"
                    accept="image/png,image/jpg,image/jpeg,image/gif"
                    // value={attachment}
                    onChange={(e) => {
                        // Make sure that the attached file is an image file
                        if (e.target.files && e.target.files[0] && (
                            e.target.files[0].type === "image/png"  ||
                            e.target.files[0].type === "image/jpg"  ||
                            e.target.files[0].type === "image/jpeg" ||
                            e.target.files[0].type === "image/gif")) {
                            ToBase64(e.target.files[0]).then((base64) => {setAttachment(base64);});
                        } else {
                            alert("Invalid filetype. Please attach a valid filetype or nothing at all.");
                        }
                    }}
                />
            </div>
            <div className="SubmitInput">
                {/* Only enable submit button when essential post fields have been filled */}
                <button
                    disabled={title === "" || message === "" || location === "choose"}
                    type="submit"
                    onSubmit={handleSubmit}
                >
                    Submit Post
                </button>
            </div>
        </form>
    );
}

export default Form;