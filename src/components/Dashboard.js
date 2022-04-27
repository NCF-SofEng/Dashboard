import '../styles/Dashboard.css';
import Card from "./Card";
import Sidebar from "../components/Sidebar";

import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

const options = {"title":{"text":"Tarpon Bay - salinity"},"xAxis":{"type":"datetime"},"series":[{"data":[[1649548800000,34.16],[1649552400000,34.19],[1649556000000,34.18],[1649559600000,34.18],[1649563200000,33.94],[1649566800000,34.13],[1649570400000,34.04],[1649574000000,34.04],[1649577600000,33.74],[1649581200000,33.35],[1649584800000,30.52],[1649588400000,30.06],[1649592000000,30.3],[1649595600000,30.51],[1649599200000,30.97],[1649602800000,31.56],[1649606400000,30.78],[1649610000000,31.09],[1649613600000,31.16],[1649617200000,31.48],[1649620800000,31.34],[1649624400000,32.51],[1649628000000,31.95],[1649631600000,32.73],[1649635200000,33.31],[1649638800000,33.38],[1649642400000,33.54],[1649646000000,33.56],[1649649600000,33.69],[1649653200000,33.7],[1649656800000,32.63],[1649660400000,32.34],[1649664000000,31.76],[1649667600000,31.8],[1649671200000,31.69],[1649674800000,31.73],[1649678400000,31.95],[1649682000000,31.94],[1649685600000,32.04],[1649689200000,32.15],[1649692800000,32.15],[1649696400000,32.09],[1649700000000,32.12],[1649703600000,32.13],[1649707200000,32.2],[1649710800000,32.44],[1649714400000,32.8],[1649718000000,32.44],[1649721600000,32.56],[1649725200000,32.56],[1649728800000,32.93],[1649732400000,32.94],[1649736000000,33.2],[1649739600000,32.94],[1649743200000,32.54],[1649746800000,33.03],[1649750400000,32.83],[1649754000000,32.16],[1649757600000,32.36],[1649761200000,31.76],[1649764800000,31.69],[1649768400000,32.03],[1649772000000,32.19],[1649775600000,32.33],[1649779200000,32.54],[1649782800000,32.65],[1649786400000,32.4],[1649790000000,32.23],[1649793600000,32.39],[1649797200000,32.71],[1649800800000,32.28],[1649804400000,32.39],[1649808000000,32.55],[1649811600000,32.62],[1649815200000,32.79],[1649818800000,32.99],[1649822400000,33.12],[1649826000000,33.16],[1649829600000,33.21],[1649833200000,32.59],[1649836800000,32.8],[1649840400000,32.04],[1649844000000,32.24],[1649847600000,32.31],[1649851200000,32.46],[1649854800000,32.77],[1649858400000,32.56],[1649862000000,32.32],[1649865600000,32.58],[1649869200000,32.71],[1649872800000,32.66],[1649876400000,32.38],[1649880000000,32.31],[1649883600000,33.03],[1649887200000,33.37],[1649890800000,33.32],[1649894400000,33.53],[1649898000000,33.72],[1649901600000,33.32],[1649905200000,32.92],[1649908800000,32.94],[1649912400000,33.01],[1649916000000,33.03],[1649919600000,33.04],[1649923200000,32.72],[1649926800000,33.09],[1649930400000,33.21],[1649934000000,33.45],[1649937600000,33.68],[1649941200000,33.73],[1649944800000,33.36],[1649948400000,33.19],[1649952000000,33.1],[1649955600000,33.15],[1649959200000,33.14],[1649962800000,33.24],[1649966400000,32.92],[1649970000000,32.58],[1649973600000,33.58],[1649977200000,33.13],[1649980800000,33.53],[1649984400000,33.43],[1649988000000,33.52],[1649991600000,33.2],[1649995200000,33.26],[1649998800000,33.22],[1650002400000,33.21],[1650006000000,33.19],[1650009600000,32.78],[1650013200000,32.63],[1650016800000,33.15],[1650020400000,32.68],[1650024000000,33.07],[1650027600000,33.2],[1650031200000,33.06],[1650034800000,32.89],[1650038400000,33.14],[1650042000000,33.11],[1650045600000,33.02],[1650049200000,33.13],[1650052800000,33.17],[1650056400000,32.52],[1650060000000,32.43],[1650063600000,32.59],[1650067200000,32.89],[1650070800000,32.87],[1650074400000,32.95],[1650078000000,33],[1650081600000,32.75],[1650085200000,32.92],[1650088800000,33.01],[1650092400000,32.85],[1650096000000,32.83],[1650099600000,32.92],[1650103200000,33.05],[1650106800000,32.46],[1650110400000,32.94],[1650114000000,33.13],[1650117600000,33.16],[1650121200000,33.15],[1650124800000,32.93],[1650128400000,33.05],[1650132000000,33.02],[1650135600000,32.97],[1650139200000,32.9],[1650142800000,32.71],[1650146400000,32.51],[1650150000000,32.68],[1650153600000,32.65],[1650157200000,32.7],[1650160800000,32.41],[1650164400000,32.65],[1650168000000,32.6],[1650171600000,32.74],[1650175200000,32.97],[1650178800000,32.91],[1650182400000,32.86],[1650186000000,32.69],[1650189600000,32.67],[1650193200000,32.41],[1650196800000,32.38],[1650200400000,32.83],[1650204000000,32.81],[1650207600000,32.89],[1650211200000,32.67],[1650214800000,32.84],[1650218400000,32.83],[1650222000000,32.82],[1650225600000,32.81],[1650229200000,32.83],[1650232800000,32.6],[1650236400000,32.49],[1650240000000,32.66],[1650243600000,32.71],[1650247200000,32.87],[1650250800000,32.68],[1650254400000,33.01],[1650258000000,32.66],[1650261600000,32.83],[1650265200000,32.89],[1650268800000,32.83],[1650272400000,32.91],[1650276000000,32.37],[1650279600000,32.31],[1650283200000,32.98],[1650286800000,32.89],[1650290400000,32.69],[1650294000000,32.7],[1650297600000,32.77],[1650301200000,32.82],[1650304800000,32.87],[1650308400000,32.84],[1650312000000,32.79],[1650315600000,32.62],[1650319200000,32.4],[1650322800000,32.55],[1650326400000,32.27],[1650330000000,32.28],[1650333600000,32.26],[1650337200000,32.39],[1650340800000,32.31],[1650344400000,32.31],[1650348000000,32.36],[1650351600000,32.55],[1650355200000,32.58],[1650358800000,32.52],[1650362400000,32.38],[1650366000000,32.39],[1650369600000,32.37],[1650373200000,32.09],[1650376800000,31.65],[1650380400000,31.95],[1650384000000,32.14],[1650387600000,32.21],[1650391200000,32.61],[1650394800000,32.59],[1650398400000,32.56],[1650402000000,32.69],[1650405600000,32.88],[1650409200000,32.86],[1650412800000,32.8],[1650416400000,32.84],[1650420000000,32.63],[1650423600000,32.5],[1650427200000,32.24],[1650430800000,31.93],[1650434400000,31.98],[1650438000000,32.54],[1650441600000,32.55],[1650445200000,32.46],[1650448800000,32.04],[1650452400000,31.62],[1650456000000,31.61],[1650459600000,31.43],[1650463200000,31.7],[1650466800000,31.76],[1650470400000,31.81],[1650474000000,31.77],[1650477600000,31.81],[1650481200000,32.3],[1650484800000,32.42],[1650488400000,32.74],[1650492000000,32.89],[1650495600000,32.88],[1650499200000,32.31],[1650502800000,32.2],[1650506400000,32.05],[1650510000000,31.42],[1650513600000,31.11],[1650517200000,31.08],[1650520800000,30.23],[1650524400000,30.28],[1650528000000,30.36],[1650531600000,30.56],[1650535200000,30.52],[1650538800000,30.81],[1650542400000,31.27],[1650546000000,31.33],[1650549600000,31.76],[1650553200000,32.23],[1650556800000,32.46],[1650560400000,32.94],[1650564000000,32.16],[1650567600000,31.83],[1650571200000,32.13],[1650574800000,32.15],[1650578400000,32.25],[1650582000000,32.31],[1650585600000,32.48],[1650589200000,31.98],[1650592800000,31.07],[1650596400000,31.8],[1650600000000,31.07],[1650603600000,30.87],[1650607200000,30.78],[1650610800000,30.87],[1650614400000,30.78],[1650618000000,30.66],[1650621600000,31.02],[1650625200000,31.05],[1650628800000,31],[1650632400000,30.8],[1650636000000,30.66],[1650639600000,30.99],[1650643200000,31.33],[1650646800000,31.59],[1650650400000,31.75],[1650654000000,31.12],[1650657600000,31.1],[1650661200000,31.3],[1650664800000,31.46],[1650668400000,31.69],[1650672000000,31.8],[1650675600000,32.1],[1650679200000,31.74],[1650682800000,31.15],[1650686400000,31.5],[1650690000000,30.81],[1650693600000,29.88],[1650697200000,30.07],[1650700800000,29.76],[1650704400000,29.54],[1650708000000,30.15],[1650711600000,30.41],[1650715200000,30.49],[1650718800000,30.69],[1650722400000,30.81],[1650726000000,31.83],[1650729600000,32.12],[1650733200000,32.86],[1650736800000,32.88],[1650740400000,33.12],[1650744000000,33],[1650747600000,32.6],[1650751200000,31.75],[1650754800000,31.37],[1650758400000,31.58],[1650762000000,31.47],[1650765600000,31.59],[1650769200000,31.68],[1650772800000,31.77],[1650776400000,31.83],[1650780000000,31.96],[1650783600000,31.58],[1650787200000,31.97],[1650790800000,31.8],[1650794400000,31.95],[1650798000000,32.43],[1650801600000,32.29],[1650805200000,32.05],[1650808800000,31.89],[1650812400000,32],[1650816000000,32.02]]}]}
const options2 = {}
const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="DashboardContent">
                <div className="Dashboard">
                    <div className="CardLayout">
                        <div className="MainContent">
                            <div className="Advisory">
                                <Card title="Advisories" bodyType="advisory" />
                            </div>
                            <div className="YoutubeVideo">
                                <Card bodyType="youtube" extras={["https://www.youtube.com/embed/x5h0YiU1cHM"]} />
                            </div>
                            <div className="CardPair">
                                <Card bodyType="chart" extras={[options]}/>
                                <Card bodyType="chart" extras={[options]}/>
                            </div>
                        </div>

                        <div className="MediaStack">
                            <Card title="Twitter" bodyType="twitter" />
                            <Card title="Spotify" bodyType="spotify" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
