import React from 'react';
import ChartDataList        from './ChartData/ChartDataList';
import ChartDataListText    from './ChartData/ChartDataListText';
import ChartImage           from './ChartImage/ChartImage';
import ChartComponentCss from './styles';

class ChartComponent extends React.Component {
    render() {
        return (
            <ChartComponentCss>
                <ChartDataList>
                  <ChartDataListText>
                    <div>시가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                  <ChartDataListText>
                    <div>고가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                  <ChartDataListText>
                    <div>저가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                  <ChartDataListText>
                    <div>종가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                </ChartDataList>
                <ChartImage />
            </ChartComponentCss>
        );
    };
};

export default ChartComponent;