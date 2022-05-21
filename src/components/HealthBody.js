import "../styles/HealthBody.css";

/**
 * Card body that consists of health information from the Florida Fish and Wildlife Conservation Comission
 * @return {JSX.Element}
 * @author DG
 */
const HealthBody = () => {
    return (
        <div className="ScrapedBody">
            <p>Information privided by the <a href="https://myfwc.com/research/redtide/statewide/">Florida Fish and Wildlife Conservation Commission</a>.</p>
            <table>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>K. Brevis Abundance</th>
                    <th>Possible Effects (K. Brevis only)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>NOT PRESENT-BACKGROUND</td>
                    <td>background levels of 1,000 cells or less</td>
                    <td>no effects anticipated</td>
                </tr>
                <tr>
                    <td>VERY LOW</td>
                    <td>> 1,000 - 10,000 cells/L</td>
                    <td>
                        possible respiratory irritation; shellfish harvesting
                        closures when cell abundance equals or exceeds 5,000 cells/L
                    </td>
                </tr>
                <tr>
                    <td>LOW</td>
                    <td>> 10,000 - 100,000 cells/L</td>
                    <td>
                        respiratory irritation; shellfish harvesting closures;
                        possible fish kills; probable detection of chlorophyll by
                        satellites at upper range of cell abundance
                    </td>
                </tr>
                <tr>
                    <td>MEDIUM</td>
                    <td>> 100,000 - 1,000,000 cells/L</td>
                    <td>
                        respiratory irritation; shellfish harvesting closures;
                        probable fish kills; detection of surface chlorophyll by
                        satellites
                    </td>
                </tr>
                <tr>
                    <td>HIGH</td>
                    <td>> 1,000,000 cells/L</td>
                    <td>as above, plus water discoloration</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HealthBody;