import React from 'react';
import ChartComponent from './ChartComponent/ChartComponent';
import ChartColumnList from './NavColList/ChartColumnList';
import CandleChartInfoCss from './styles';

const CandleChartInfo = () => {
    return (
        <CandleChartInfoCss>
            <ChartColumnList />
            <ChartComponent />
        </CandleChartInfoCss>
    );
};

export default CandleChartInfo;