import React from 'react';
// import CurrencyArray from '../../../Routes/currencyArray';
import ChangeCurrencyPairContainer from '../../../containers/changeCurrencyPairContainer';
import ChartColumnListCss from './styles';

const ChartColumnList = ()=> {
    return (
        <ChartColumnListCss>
            <li className='title'>CurrencyPair</li>
            <ChangeCurrencyPairContainer />
        </ChartColumnListCss>
    );
};

export default ChartColumnList;