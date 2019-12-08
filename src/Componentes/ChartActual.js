// Step 1 - Including react
import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configuration
// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class ChartActual extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
     return (
     <ReactFC
        type ='angulargauge' // The gauge type
        width ='450' // Width of the gauge
        height= '250' // Height of the gauge
        dataFormat= 'json' // Data type
        dataSource = {{
        // Chart Configuration
          "chart": {
              "caption": this.props.title,
              "lowerLimit": this.props.lower,
              "upperLimit": this.props.upper,
              "showValue": "1",
              "numberSuffix": this.props.unidad,
              "theme": "fusion",
              "showToolTip": "0"
          },
          // Chart Data
          "colorRange": {
              "color": [{
                  "minValue": "0",
                  "maxValue": this.props.minValue,
                  "code": "#F2726F"
              }, {
                  "minValue": this.props.minValue,
                  "maxValue": this.props.maxValue,
                  "code": "#FFC533"
              }, {
                  "minValue": this.props.maxValue,
                  "maxValue": "40",
                  "code": "#62B58F"
              }]
          },
          "dials": {
              "dial": [{
                  "value": this.props.valor
                }]
            }
        }}/>
     );
  }
}

export default ChartActual