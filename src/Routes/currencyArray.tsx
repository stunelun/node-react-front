// import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../Components/store/modules/changeCurrencyPair";
// import reducerChangeCurrencyPair, {ChangeCurrency}  from '../Components/store/modules/changeCurrencyPair'


// import { Route } from "react-router-dom";
// import ChartComponent from "../Components/body/ChartComponent/ChartComponent";

const getQuery = gql`
    query {
        KorbitDataCurrencyArray {
            currencyArray
        }
    }
`;

const mapDispatchToProps = (dispatch:any) => {
    console.log('currencyArray dispatch : ', dispatch);    
    return {
        CurrencypairClick: (viewCurrencyPair:string) => {
            console.log('currencyArray viewCurrencyPair : ', viewCurrencyPair+'_krw');
            dispatch(actionCreators.ChangeCurrency(viewCurrencyPair+'_krw'));
        }
    }
}

const currencyArray = (props:any) => {
    // const { loading, error, data } = useQuery(getQuery);
    // if (loading) return <p>Loading... </p>
    // if (error) return <p>Error! : {error} </p>

    // const getData = data.KorbitDataCurrencyArray.currencyArray;
    // if(data && getData) {
        
    // set consts
        const arrCurrencyName: string[]= [];
        const positionCurrencyName = 0;
        
    //     /**
    //      * split & UpperCasing currerncyName
    //      */
    //     getData.forEach((element: string, currencyName: string) => {
    //         currencyName = element.split('_')[positionCurrencyName];
    //         arrCurrencyName.push((element.split('_')[positionCurrencyName]).toUpperCase());
    //     });

    //     return (
    //         <> {
    //             arrCurrencyName.map((currName,index) => {
    //                 const hrefCurrName:string = `/CandleChart/${currName}`;
    //                 return (
    //                     // <li key={index}><a href={hrefCurrName} onclick={setCurrencyPair(currName)}>{currName}</a></li>
    //                     <li key={index}><a href={hrefCurrName}>{currName}</a></li>
    //                 )
    //             })
    //         } </>
    //     );
    // }
    // else return <p>Error... from getCurrencyArray. </p>


    // tmp mock_up code Start
    const mockupCurrencyPairs = ['aergo_krw','bat_krw','bch_krw','bnb_krw','bsv_krw','btc_krw'];
    mockupCurrencyPairs.forEach(element => {
        arrCurrencyName.push((element.split('_')[positionCurrencyName]).toUpperCase());
    });

    return (
        <>{
            arrCurrencyName.map((currencyPair, index) => {
                // return <li key={index}><a onClick = {() => reducerChangeCurrencyPair(actionChangeCurrency("",element))}>{element}</a></li>
                return <li key={index}><a onClick = {() => props.CurrencypairClick(currencyPair)}>{currencyPair}</a></li>
            })
        }</>
    );
    // tmp mock_up code End
};



export default connect(null, mapDispatchToProps)(currencyArray);