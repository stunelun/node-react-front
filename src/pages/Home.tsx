import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import CandleChartInfo from './CandleChartInfo';

const Home = (props: any) => {
    console.log('Home props : ', props)
    return (
        <Fragment>
            <Header />
            <Route exact path="/CandleChart" component={CandleChartInfo} />
            <Footer />
        </Fragment>
    )
}

export default Home;