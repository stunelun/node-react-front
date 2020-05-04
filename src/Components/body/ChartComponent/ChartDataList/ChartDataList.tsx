import React from 'react';
import ChartInfo from '../../../../Routes/chartInfo';
// import CurrencyArray from '../../../Routes/currencyArray';
import ChartDataListCss from './styles';

const ChartDataList = () => {
    // currencyPair = (typeof currencyPair !== 'undefined') ?  currencyPair : 'btc_krw';
    return (
        <ChartDataListCss>
            <ChartInfo currencyPair='btc_krw'/>
        </ChartDataListCss>
    );
};

export default ChartDataList;