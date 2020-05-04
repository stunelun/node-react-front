import React, { Fragment } from 'react';
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
            {/* footer 내장 css를 수정하여 하단에 고정시키고 싶은데, 해당 파일이 어디에 있는 지 아직 모르겠음... 푸터컴포넌트 직접 만듦. */}
            <Footer />
        </Fragment>
    )
}


export default Home;