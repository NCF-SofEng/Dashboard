import "../styles/ChartBody.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartBody = (options) => {
  return (
    <div className="ChartBody">
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
        />
    </div>
  );
}

export default ChartBody;