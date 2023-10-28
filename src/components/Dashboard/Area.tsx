import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import data from './areaData'

type Props = {
  data: [number, number][];
  color: string;
}

export default function Area() {
  const chartOptions = {
    chart: {
      height: 150,
      type: 'areaspline',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      backgroundColor: 'rgba(0,0,0,0)',
      legend: {
        enabled: false,
      },
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false,
    },
    series: [{
      data,
    }],
    yAxis: {
      title: false,
      lineWidth: 0,
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      labels: {
        enabled: false
      }
    },
    //@ts-ignore
    xAxis: {
      title: false,
      lineWidth: 1,
      minorGridLineWidth: 0,
      labels: {
        enabled: false,
      }
    },
    plotOptions: {
      areaspline: {
        color: '#9e6ec7',
      }
    }
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />

  )
}
