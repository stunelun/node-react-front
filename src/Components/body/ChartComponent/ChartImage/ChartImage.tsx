import React from 'react';
import ChartData from '../../../../Routes/CandleChart';
import ChartImageCss from './styles';

class ChartComponent extends React.Component {
    render() {
        return (
            <ChartImageCss>
                <ChartData />
            </ChartImageCss>
        );
    };
};

export default ChartComponent;