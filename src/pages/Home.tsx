import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CandleChartInfo from '../Components/body/CandleChartInfo';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';

const Home = () => {
    return (
        /**
         * React.Fragment
         * <></> 빈 태그도 사용 가능
         * 아직은 다양한 툴에서 지원하지 못하므로, 빈 태그 사용 시 주의할 것.
         */
        <Fragment>
            <Header />
            <Route exact path="/CandleChart" component={CandleChartInfo} />
            <Footer />
        </Fragment>
    )
}

export default Home;