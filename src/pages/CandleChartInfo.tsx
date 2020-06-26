import React from 'react';
import { connect } from 'react-redux';
import ChartComponent from '../Components/body/ChartComponent/ChartComponent';
import ChartColumnList from '../Components/body/NavColList/ChartColumnList';
import ChartInfoData from '../Routes/chartInfoData';
import CandleChartInfoCss from './CnadleChartInfoCss';

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