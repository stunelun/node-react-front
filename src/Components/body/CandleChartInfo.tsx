import React from 'react';
import ChartComponent from './ChartComponent/ChartComponent';
import NavColList from './NavColList/NavColList';
import CandleChartInfoCss from './styles';

class CandleChartInfo extends React.Component {
    render() {
        return (
            <CandleChartInfoCss>
                <NavColList />
                <ChartComponent />
            </CandleChartInfoCss>
        );
    };
};

export default CandleChartInfo;