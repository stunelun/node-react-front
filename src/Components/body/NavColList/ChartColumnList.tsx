import React from 'react';
import CurrencyArray from '../../../Routes/currencyArray';
import ChartColumnListCss from './styles';

const ChartColumnList = ()=> {
    return (
        <ChartColumnListCss>
            <li className='title'>CurrencyPair</li>
            <CurrencyArray />
        </ChartColumnListCss>
    );
};

export default ChartColumnList;