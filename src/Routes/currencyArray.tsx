
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
// import { connect } from "react-redux";
// import { actionCreators } from "../actions/index";


const getQuery = () => {
  return gql`
    query {
        KorbitDataCurrencyArray {
            currencyArray
          }
    }
  `;
};


const CurrencyArray = (props:any) => {
    const { loading, error, data } = useQuery(getQuery());
    if (loading) return <p>Loading... </p>
    if (error) return <p>Error! : {error} </p>

    const getData = data.KorbitDataCurrencyArray.currencyArray;
    // if(data && getData) {
        
    // set consts
    const arrCurrencyName: string[]= [];
    const positionCurrencyName = 0;
        
    /**
     * split & UpperCasing currerncyName
     */
    getData.forEach((element: string, currencyName: string) => {
        currencyName = element.split('_')[positionCurrencyName];
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
};

export default CurrencyArray;