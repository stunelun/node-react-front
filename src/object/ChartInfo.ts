class ChartInfo  {
    time!:string;
    dataLast!:number;
    dataStart!:number;
    dataHigh!:number;
    dataLow!:number;
}

export const setDefaultChartInfo = (chartInfo: ChartInfo) => {
    chartInfo.dataLast = 0;
    chartInfo.dataStart = 0;
    chartInfo.dataHigh = 0;
    chartInfo.dataLow = 0;
    return chartInfo;
}

export default ChartInfo;