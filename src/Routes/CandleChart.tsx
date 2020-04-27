import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";


const getData = gql`
    query {
        KorbitDataSelection(getCurrencyPair: "btc_krw", seq1: 60000, seq2: 60500) {
            selection {
                currencyPair
                seq
                last
                timestamp
            }
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(getData);
    if (loading) return <p>Loading... </p>
    if (error) return <p>Error... </p>
    if(data && data.KorbitDataSelection.selection) {
        const selectData = data.KorbitDataSelection.selection;
        const arrCurrency: any[] =  [];
        console.log('split_1 ready : ', selectData);
        selectData.forEach((element: { currencyPair: string; }, text: string) => {
            text = element.currencyPair.split('_')[0];
            console.log('Text ----------- : ',text);
            arrCurrency.push(text);
        });
        
        console.log(arrCurrency);

        return (
            <div>
                <h1>{arrCurrency[0]}</h1>
                <h2>{arrCurrency[1]}</h2>
            </div>
        );
    };
    return <h1>Daaaaata</h1>;   
};