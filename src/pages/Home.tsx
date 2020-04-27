import React from 'react';
import { Route } from 'react-router-dom';
import CandleChartInfo from '../Components/body/CandleChartInfo';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <body>
                <Route exact path="/CandleChart" component={CandleChartInfo} />
            </body>
            {/* footer 내장 css를 수정하여 하단에 고정시키고 싶은데, 해당 파일이 어디에 있는 지 아직 모르겠음... 푸터컴포넌트 직접 만듦. */}
            <Footer />
        </div>
    )
}


export default Home;