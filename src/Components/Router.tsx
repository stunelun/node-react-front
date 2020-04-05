import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import CandleChart from "../Routes/CandleChart"

// 컴포넌트 오류, 왜 나는 거지...??
export default () => (
    <Router>
        <Switch>
            <Route path="/CandleChart" exact components={CandleChart} />
            <Redirect from={"*"} to={"/"} />
        </Switch>
    </Router>
);