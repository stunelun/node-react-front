import React from "react";
import KorbitData from "../../../object/KorbitData";
import ChartDataList from "./ChartDataList/ChartDataList";
import GoogleChart from "./ChartImage/googleChart";
import ChartComponentCss from "./styles";

const ChartComponent = (props: { currencyPair: string, selectData: KorbitData[] | JSX.Element }) => {
  if (Array.isArray(props.selectData)) {
    return (
      <ChartComponentCss>
        <ChartDataList selectData={props.selectData} />
        <GoogleChart selectData={props.selectData} currencyPair={props.currencyPair} />
      </ChartComponentCss>
    );
  } else {
    return (
      <ChartComponentCss>
        <h1>{props.selectData}</h1>
      </ChartComponentCss>
    );
  }
};

export default ChartComponent;
