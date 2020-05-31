import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store/modules/changeCurrencyPair';
// import currencyStore from '../store/modules/currencyStore';
import ChartComponent from './ChartComponent/ChartComponent';
import ChartColumnList from './NavColList/ChartColumnList';
import CandleChartInfoCss from './styles';


const CandleChartInfo = (props:any) => {
    
    const [viewCurrencyPair, setCurrencyPair] = useState('btc_krw')

    const hanldeViewCurrencyPair = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCurrencyPair(e.target.value);
    }
    
    console.log('props : ', props);

    return (
        <CandleChartInfoCss>
            {/* <Route path = {path} component = {ChartColumnList}/> */}
            <ChartColumnList/>
            {/* Route path =< {currName} component={ChartComponent} currencyPair={currName} /> */}
            <ChartComponent currencyPair={viewCurrencyPair}/>
            {/* <ChartComponent currencyPair={currencyPair}/> */}
        </CandleChartInfoCss>
    );
};

const mapStateToProps = (state: any) => {
    console.log('state : ', state)
    return { state }
}

export default connect(mapStateToProps)(CandleChartInfo);