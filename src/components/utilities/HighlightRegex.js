import "../../styles/utilities/HighlightRegex.css";

export const HighlightRegex = (content, ...expressions) => {
    for (const expression of expressions) {
        const regex = new RegExp(expression, "g");
        content = content.replace(regex, (match) => {
            let link = "";
            switch (match[0]) {
                case "@":
                    link = `https://twitter.com/${match}`;
                    break;
                case "#":
                    link = `https://twitter.com/hashtag/${match.substring(1)}`;
                    break;
                default:
                    link = match;
                    break;
            }
            return `<span class="Highlighted" onclick="window.location='${link}'">${match}</span>`;
        });
    }
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}