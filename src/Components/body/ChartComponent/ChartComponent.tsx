import React from 'react';
import ChartInfoData from '../../../Routes/chartInfoData';
import ChartDataList        from './ChartDataList/ChartDataList';
import GoogleChart from './ChartImage/googleChart';
import ChartComponentCss from './styles';

// const ChartComponent = (props: {currencyPair?:string}) => {
    // if(typeof(props.currencyPair)?.toString === 'undefined') props.currencyPair = `btc_krw`;

const ChartComponent = (props: {currencyPair:string}) => {    
    console.log('ChartComponent viewCurrencyPair : ', props.currencyPair);
    const selectData = ChartInfoData(props.currencyPair);
    if(Array.isArray(selectData)) {
        return (
            <ChartComponentCss>
                <ChartDataList selectData = {selectData}/>
                <GoogleChart selectData = {selectData}/>
            </ChartComponentCss>
        );
    } else {
        return (
            <ChartComponentCss>
                <h1>{selectData}</h1>
            </ChartComponentCss>
        )
    }
};

export default ChartComponent;