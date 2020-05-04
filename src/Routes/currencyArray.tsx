import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";

const getQuery = gql`
    query {
        KorbitDataCurrencyArray {
            currencyArray
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(getQuery);
    if (loading) return <p>Loading... </p>
    if (error) return <p>Error! : {error} </p>

    const getData = data.KorbitDataCurrencyArray.currencyArray;
    if(data && getData) {
        
        // set consts
        const arrCurrencyName: string[]= [];
        const positionCurrencyName = 0;
        
        /**
         * split currerncyName
         */
        getData.forEach((element: string, currencyName: string) => {
            currencyName = element.split('_')[positionCurrencyName];
            arrCurrencyName.push(currencyName.toUpperCase());
        });

        return(
            <div>
                {
                    arrCurrencyName.map((currName,index) => {
                        return <li key={index}>{currName}</li>
                    })
                }
            </div>
        );
    }
    else return <p>Error... from getCurrencyArray. </p>
};