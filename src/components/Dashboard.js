import '../styles/Dashboard.css';
import Card from "./Card";

import { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salinity: null,
            temperature: null,
            loading: true
        };
    }

    componentDidMount() {
        // Promise.all used to make sure both requests run at the same time,
        // then update the state with the result.
        Promise.all([
            fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/sensors/data?type=salinity")
                .then(response => response.json()),
            fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/sensors/data?type=chlorophyll")
                .then(response => response.json())
        ]).then(([salinity, temperature]) => {
            const s = salinity.data[0].data[0];
            const t = temperature.data[0].data[0];

            this.setState({
                salinity: { 
                    title: {
                        text: s.title
                    },
                    xAxis: {
                        type: "datetime"
                    },
                    series: [{
                        data: s.measurements //.map(x => x[1])
                    }]
                },
                temperature: {
                    title: {
                        text: t.title
                    },
                    xAxis: {
                        type: "datetime"
                    },
                    series: [{
                        data: t.measurements //.map(x => x[1])
                    }]
                },

                loading: false
            });
        })
    }

    render() {
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
                                    {/* when loading isn't false, render the charts */}
                                    {this.state.loading === false &&
                                        <>
                                        <Card 
                                            bodyType="chart"
                                            extras={[this.state.salinity]}
                                            description={`
                                                Salinity in Parts-Per-Thousand, 35 being the usual average occording to the National Weather Service.
                                            `}
                                            />
                                        <Card 
                                            bodyType="chart"
                                            extras={[this.state.temperature]}
                                            description={`
                                                Milligrams of chlorophyll measured per cubic meter of sea water. 
                                            `}
                                            />
                                        </>
                                    }
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
}