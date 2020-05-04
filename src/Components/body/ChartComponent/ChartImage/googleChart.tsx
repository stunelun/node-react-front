import React from 'react';
import Chart from 'react-google-charts';

const GoogleChart = () => {
    const now = new Date();

    console.log(now.getHours());
    console.log(now.getMinutes());
    const nowFormat = `${now.getHours()}:${now.getMinutes()}`;
    console.log('now Format : ', nowFormat);

    return (
        <Chart
            width={'100%'}
            height={350}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Time', 'low', 'start', 'last', 'high'],
                ['2020-05-04', 11045000, 11045000, 11084500, 11125000],
                ['2020-05-03', 10973500, 11084500,11050500 , 11084500],
                // [, 50, 55, 77, 80],
            ]}
            options={{
                legend: 'none',
                backgroundColor: 'smokewhite',
                candlestick: {
                    fallingColor: { strokeWidth: 0, fill: 'blue'}, // blue
                    risingColor: { strokeWidth: 0, fill: 'red'},   // red
                  },
                colors: ["black"]
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
};

export default GoogleChart;