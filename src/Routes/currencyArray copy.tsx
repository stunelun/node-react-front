
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../Components/store/modules/changeCurrencyPair";


const getQuery = () => {
  return gql`
    query {
        KorbitDataCurrencyArray {
            currencyArray
          }
    }
  `;
};


const currencyArray = (props:any) => {
    // const { loading, error, data } = useQuery(getQuery());
    // if (loading) return <p>Loading... </p>
    // if (error) return <p>Error! : {error} </p>

    // const getData = data.KorbitDataCurrencyArray.currencyArray;
    // if(data && getData) {
        
    // // set consts
        const arrCurrencyName: string[]= [];
        const positionCurrencyName = 0;
        
    //     /**
    //      * split & UpperCasing currerncyName
    //      */
        // getData.forEach((element: string, currencyName: string) => {
        //     currencyName = element.split('_')[positionCurrencyName];
        //     console.log('getData Test result _ currencyName : ', currencyName);
        //     // arrCurrencyName.push((element.split('_')[positionCurrencyName]).toUpperCase());
        // });


    //     return (
    //         <>{
    //             arrCurrencyName.map((currencyPair, index) => {
    //                 return <li key={index}><a onClick = {() => 
    //                     props.CurrencypairClick(currencyPair)
    //                 }>{currencyPair}</a></li>
    //             })
    //         }</>
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
                return <li key={index}><a onClick = {() => 
                    props.CurrencypairClick(currencyPair)
                }>{currencyPair}</a></li>
            })
        }</>
    );
    // tmp mock_up code End

    // return arrCurrencyName;
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        CurrencypairClick: (viewCurrencyPair:string) => {
            dispatch(actionCreators.ChangeCurrency(viewCurrencyPair+'_krw'));
        }
    }
}

export default connect(null, mapDispatchToProps)(currencyArray);