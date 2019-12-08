import { render } from "react-dom";
import { Chart } from "react-google-charts";
import React from 'react';

class ChartExample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="col s12 m12">
        <div class="card z-depth-3">
          <div class="card-content gray-text">
            <span class="card-title">{this.props.title}</span>
            <div class="divider"></div>
            <div className={"my-pretty-chart-container"}>
              <Chart
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={this.props.data}
                options={{
                  hAxis: { title: 'Fecha' },
                  isStacked: true,
                  height: 300,
                  legend: { position: 'top', maxLines: 3 },
                  vAxis: { minValue: 0 },
                }}
                rootProps={{ 'data-testid': '2' }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChartExample;
