import React from 'react';
import KorbitData from '../../../../object/KorbitData';
import ChartDataListCss from './styles';

const ChartDataList = (props: {selectData:KorbitData[]}) => {
    const chartInfo = {
        dataLast:0,
        dataStart:0,
        dataHigh:0,
        dataLow:0
    }

    try {
        if(props.selectData.length !== 0) {
            chartInfo.dataLast = props.selectData.reduce((previous , current) => {
                return previous.timestamp > current.timestamp? previous:current}
            ).last;
            chartInfo.dataStart = props.selectData.reduce((previous , current) => {
                return previous.timestamp > current.timestamp? current:previous}
                ).last;
            chartInfo.dataHigh = props.selectData.reduce((previous , current) => {
                return previous.last > current.last? previous:current}
                ).last;
            chartInfo.dataLow = props.selectData.reduce((previous , current) => {
                return previous.last > current.last? current:previous}
                ).last;
        }
        // have data, return selected data
        // have no data, return default-setting data
        return (
            <ChartDataListCss>
                <li>
                    <div>종가</div>
                    <div>{chartInfo.dataLast}</div>
                </li>
                <li>
                    <div>시가</div>
                    <div>{chartInfo.dataStart}</div>
                </li>
                <li>
                    <div>고가</div>
                    <div>{chartInfo.dataHigh}</div>
                </li>
                <li>
                    <div>저가</div>
                    <div>{chartInfo.dataLow}</div>
                </li>
            </ChartDataListCss>
        );
    } catch (error) {
        console.error('Error from ChartDataList : ', error);
        return error;
    }
};

export default ChartDataList;