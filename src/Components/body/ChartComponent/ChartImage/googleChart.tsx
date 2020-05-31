import React from 'react';
import Chart from 'react-google-charts';
import ChartInfo from '../../../../object/ChartInfo';
import KorbitData from '../../../../object/KorbitData';

const GoogleChart = (props: {selectData:KorbitData[]}) => {
    const nowTime = new Date().getTime();
    const min30Term : number = 30*60*1000;
    let minPoint = nowTime - (nowTime % (min30Term));
    const chartInfoArray:ChartInfo[] = [];
    const separatePoint:number = 24;

    for (let index = 0; index < separatePoint; index++) {
        const chartInfo:ChartInfo = new ChartInfo;
        let KorbitDataTemp:KorbitData = new KorbitData;

        props.selectData.forEach(async selectDataElement => {
            if(minPoint-min30Term <= selectDataElement.timestamp && selectDataElement.timestamp <= minPoint) {
                if(!chartInfo.dataLast) {
                    chartInfo.dataLast = selectDataElement.last;
                    chartInfo.dataStart = selectDataElement.last;
                    chartInfo.dataHigh = selectDataElement.last;
                    chartInfo.dataLow = selectDataElement.last;
                } else {
                    if(selectDataElement.timestamp > KorbitDataTemp.timestamp) chartInfo.dataLast = selectDataElement.last;
                    if(selectDataElement.timestamp < KorbitDataTemp.timestamp) chartInfo.dataStart = selectDataElement.last;
                    if(selectDataElement.last > KorbitDataTemp.last) chartInfo.dataHigh = selectDataElement.last;
                    if(selectDataElement.last < KorbitDataTemp.last) chartInfo.dataLow = selectDataElement.last;
                }
                KorbitDataTemp = selectDataElement;
            }
        });

        
        const timeFormat = (checkString : string) => {
            return checkString.length === 2 ? checkString : '0'+checkString;
        }
        
        const date = new Date(minPoint);
        chartInfo.time = `${timeFormat(date.getHours().toString())}:${timeFormat(date.getMinutes().toString())}`;

        chartInfoArray.push(chartInfo);

        // resetting minPoint
        minPoint = minPoint - min30Term;
    }

    const viewChartData = () => {
        const chartData = [];
        chartData.push(['Time', 'Low', 'Start', 'Last', 'High']);
        
        chartInfoArray.reverse().forEach(element => {
            chartData.push([element.time, element.dataLow, element.dataStart, element.dataLast , element.dataHigh]);
        });
        return chartData;
    }
    
    return (
        <Chart
            width={'100%'}
            height={800}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={
                viewChartData()
            }
            options={{
                legend: 'none',
                backgroundColor: 'smokewhite',
                candlestick: {
                    fallingColor: { strokeWidth: 0, fill: 'blue'}, // blue
                    risingColor: { strokeWidth: 0, fill: 'red'},   // red
                  },
                colors: ["black"]
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
};

export default GoogleChart;