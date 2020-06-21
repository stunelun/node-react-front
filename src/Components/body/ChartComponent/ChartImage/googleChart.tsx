import React from 'react';
import Chart from 'react-google-charts';
import ChartInfo, {setDefaultChartInfo} from '../../../../object/ChartInfo';
import KorbitData from '../../../../object/KorbitData';

const GoogleChart = (props: {selectData:KorbitData[], currencyPair:string}) => {
    const nowTime = new Date().getTime();
    const min30Term : number = 30*60*1000;
    let minPoint = nowTime - (nowTime % (min30Term));
    const chartInfoArray:ChartInfo[] = [];
    
    /** view half-day graph : 30min * 12(24) seperate */
    // const separatePoint:number = 12;
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
        
        let chkCnt: number = 0;
        chartInfoArray.reverse().forEach((element) => {    
            chartData.push([
                element.time, element.dataLow, element.dataStart, element.dataLast, element.dataHigh]);
            if(element.dataHigh === undefined) chkCnt++;
        });

        if(chkCnt === separatePoint) {
            const noDataInfo = [];
            const startDataArray = 1;
            const timePoint = 0;
            noDataInfo.push(
                ['', '', '', '', ''],
                [`${props.currencyPair} has no recent data.
                [${chartData[startDataArray][timePoint]}~${chartData[separatePoint][timePoint]}] `,0,0,0,0]
            );
            return noDataInfo;
        } else {
            return chartData;
        }
    }

    return (
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={
                viewChartData()
            }
            options={{
                title: props.currencyPair,
                legend: 'none',
                backgroundColor: 'smokewhite',
                candlestick: {
                    fallingColor: { strokeWidth: 0, fill: 'blue'},
                    risingColor: { strokeWidth: 0, fill: 'red'},
                  },
                colors: ["black"]
            }}
            // rootProps={{ 'data-testid': '1' }}    <== rootProps 어떤 역할인 지 모르겠으나, 없어도 그래프 작동. 학습 목적으로 남겨놓음
        />
    );
};

export default GoogleChart;