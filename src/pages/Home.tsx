import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import CandleChartInfo from './CandleChartInfo';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Route exact path="/CandleChart" component={CandleChartInfo} />
            <Footer />
        </Fragment>
    )
}

export default Home;