import '../styles/Dashboard.css';
import Card from "./Card";
import Sidebar from "../components/Sidebar";

import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

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

                            <div className="CardPair">
                                <div className="Chart">
                                    <HighchartsReact
                                        highcharts={Highcharts}
                                        options={options}
                                    />
                                </div>
                                <div className="Chart">
                                    <HighchartsReact
                                        highcharts={Highcharts}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <div className="YoutubeVideo">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/x5h0YiU1cHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
