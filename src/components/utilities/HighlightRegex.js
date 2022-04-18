import "../../styles/utilities/HighlightRegex.css";

export const HighlightRegex = (content, ...expressions) => {
    for (const expression of expressions) {
        const regex = new RegExp(expression, "g");
        content = content.replace(regex, (match) => {
            return `<span class="Highlighted">${match}</span>`;
        });
    }
    return (
        <post>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </post>
    );
}