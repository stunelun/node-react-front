import React from 'react';
import { connect } from 'react-redux';
import ChartInfoData from '../../Routes/chartInfoData';
import ChartComponent from './ChartComponent/ChartComponent';
import ChartColumnList from './NavColList/ChartColumnList';
import CandleChartInfoCss from './styles';

const CandleChartInfo = (props:any) => {
    const selectData = ChartInfoData(props.state.viewCurrencyPair);
    return (
        <CandleChartInfoCss>
            <ChartColumnList/>
            <ChartComponent currencyPair={props.state.viewCurrencyPair} selectData={selectData}/>
        </CandleChartInfoCss>
    );
};

const mapStateToProps = (state: any) => {
    return { state }
}


export default connect(mapStateToProps)(CandleChartInfo);