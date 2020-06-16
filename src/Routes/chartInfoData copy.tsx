import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import KorbitData from "../object/KorbitData";


const getData = (currencyPair: string) => {
  return gql`
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
  `;
};

const ChartInfoData = (currencyPair: string) => {
  const { loading, error, data } = useQuery(getData(currencyPair));
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error from getData : {error}</p>;

  if (data.KorbitDataChartInfo.selection) {
    const selectData: KorbitData[] = data.KorbitDataChartInfo.selection;
    return selectData;
  } else {
    console.error(
      "Warning from ChartInfo (no found data.KorbitDataChartInfo.selection) : ",
      data.KorbitDataChartInfo.selection
    );
    const selectData: KorbitData[] = [];
    return selectData;
  }
};


export default ChartInfoData;