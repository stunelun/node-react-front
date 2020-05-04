import React from 'react';
import ChartDataList        from './ChartDataList/ChartDataList';
import ChartImage           from './ChartImage/ChartImage';
import ChartComponentCss from './styles';


const ChartComponent = () => {
    return (
        <ChartComponentCss>
            <ChartDataList/>
            <ChartImage />
        </ChartComponentCss>
    );
};

export default ChartComponent;