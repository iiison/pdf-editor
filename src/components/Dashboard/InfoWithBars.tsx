import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  xAxis: string[] | number[];
  yAxis: number[];
  barColor: string;
}

export default function InfoWithBars({ xAxis, yAxis, barColor }: Props) {
  const chartOptions: Options = {
    chart: {
      height: 200,
      type: 'column',
      reflow: true,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    title: {
      text: ""
    },
    labels: {
      enabled: false,
    },
    series: [
      {
        type: "column",
        name: '',
        data: yAxis,
      }
    ],
    //@ts-ignore
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
      lineColor: barColor,
      categories: xAxis,
      labels: {
        enabled: false,
        useHTML: true,
        formatter: () => ""
      }
    },
    plotOptions: {
      series: {
        showInLegend: false,
        stacking: 'normal'
      },
      column: {
        color: barColor,
        borderColor: `transparent`,
        pointWidth: 15,
        borderRadius: 10,
        pointPadding: 0,
      }
    },
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  )
}
