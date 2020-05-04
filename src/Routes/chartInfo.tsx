import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { Component } from "react";
import KorbitData from "../entities/KorbitData";


const getData = (currencyPair:string) => {
    return (
        gql`
            query {
                KorbitDataChartInfo(getCurrencyPair: "${currencyPair}") {
                    selection {
                        currencyPair
                        seq
                        last
                        timestamp
                    }
                }
            }
        `
    )
};

const ChartInfo = (props: { currencyPair: string; }) => {

    const { loading, error, data } = useQuery(getData(props.currencyPair));
    if (loading) return <p>Loading... </p>
    if (error) return <p>Error... </p>
    if(data.KorbitDataChartInfo.selection) {
        
        const chartInfo = {
            dataLast:0,
            dataStart:0,
            dataHigh:0,
            dataLow:0
        }
        const selectData: KorbitData[] = data.KorbitDataChartInfo.selection;

        try {
            if(selectData.length !== 0){
                chartInfo.dataLast = selectData.reduce((previous, current) => {
                    return previous.timestamp > current.timestamp? previous:current}
                ).last;
                console.log('chartData.dataLast: ', chartInfo.dataLast);
                chartInfo.dataStart = selectData.reduce((previous, current) => {
                    return previous.timestamp > current.timestamp? current:previous}
                    ).last;
                chartInfo.dataHigh = selectData.reduce((previous, current) => {
                    return previous.last > current.last? previous:current}
                    ).last;
                chartInfo.dataLow = selectData.reduce((previous, current) => {
                    return previous.last > current.last? current:previous}
                    ).last;
            }        
            // have data, setting and return data
            // have no data, return default-setting data
            return(
                <>
                    <li>
                        <div>종가</div>
                        <div>{chartInfo.dataLast}</div>
                    </li>
                    <li>
                        <div>시가</div>
                        <div>{chartInfo.dataStart}</div>
                    </li>
                    <li>
                        <div>고가</div>
                        <div>{chartInfo.dataHigh}</div>
                    </li>
                    <li>
                        <div>저가</div>
                        <div>{chartInfo.dataLow}</div>
                    </li>
                </>
            )
        } catch (error) {
            console.error('Error from ChartInfo : ', error);
            return error;
        }
    } else {
        console.error('Warning from ChartInfo (no found data.KorbitDataChartInfo.selection) : ', data.KorbitDataChartInfo.selection);
        return (
            <>
                <h2>Warning from ChartInfo (no found data.KorbitDataChartInfo.selection) : </h2>
                <h1>{data.KorbitDataChartInfo.selection}</h1>
            </>
        );
    }
}


export default ChartInfo;