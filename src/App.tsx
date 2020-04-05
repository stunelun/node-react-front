import React, { Component } from 'react';
import CandleChartInfo      from './Components/body/CandleChartInfo';
import ChartComponent       from './Components/body/ChartComponent/ChartComponent';
import ChartDataList        from './Components/body/ChartComponent/ChartData/ChartDataList';
import ChartDataListText    from './Components/body/ChartComponent/ChartData/ChartDataListText';
import ChartImage           from './Components/body/ChartComponent/ChartImage/ChartImage';
import NavColList           from './Components/body/NavColList/NavColList';
import FooterCommon         from './Components/footer/FooterCommon';
import FooterDataList       from './Components/footer/FooterDataList';
import FooterDataListText   from './Components/footer/FooterDataListText';
import NavHeadList          from './Components/header/NavHeadList';
// import LinkTest             from './Components/header/LInkTest';
import Router from './Components/Router'
// function App () {}   <=== Q. 클래스로 할 때와 함수로 할 때의 차이점은...??
// 1.React Component를 확장한다는 점
// 2.함수로 할 경우, 랜더링 부분을 안넣어줘도 된다. (이유는...?)
// 3. 그 외에는...?

class App extends Component {
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <Router />
            <NavHeadList>
              <li className="title">Korbit_CandleChart</li> 
              <li><a className="item1">거래하기</a></li>
              <li><a className="item2">입출금</a></li>
              <li><a className="item3" href='/CandleChart'>캔들차트</a></li>
              <li><a className="yarn item4">n:4</a></li>
              <li><a className="itemn">n:...n</a></li>
            </NavHeadList>
          </header>
          <body>
            <CandleChartInfo>
              <NavColList>
                  <li className='title'>CurrencyPair</li>
                  <li><a>BTC</a></li>
                  <li><a>BCH</a></li>
                  <li><a>ETC</a></li>
              </NavColList>
              <ChartComponent>
                <ChartDataList>
                  <ChartDataListText>
                    <div>시가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                  <ChartDataListText>
                    <div>고가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                  <ChartDataListText>
                    <div>저가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                  <ChartDataListText>
                    <div>종가</div>
                    <div>123456789</div>
                  </ChartDataListText>
                </ChartDataList>
                <ChartImage>Chart Image ...</ChartImage>
              </ChartComponent>  
            </CandleChartInfo>
          </body>
          
          {/* footer 내장 css를 수정하여 하단에 고정시키고 싶은데, 해당 파일이 어디에 있는 지 아직 모르겠음... 푸터컴포넌트 직접 만듦. */}
          <FooterCommon>
            <FooterDataList>
              <FooterDataListText>
                <div>(주) 코빗</div>
                <div>서울특별시 강남구 테헤란로5길 7, 4층</div>
              </FooterDataListText>
              <FooterDataListText>
                <div>대표</div>
                <div>오세진</div>
              </FooterDataListText>
              <FooterDataListText>
                <div>제휴 및 법인등록</div>
                <div>biz@korbit.co.kr</div>
              </FooterDataListText>
              <FooterDataListText>
                <div>고객센터 | E-mail</div>
                <div>1661-9707 | info@korbit.co.kr</div>
              </FooterDataListText>
              <FooterDataListText>
                <div>페이스북</div>
                <div><a>https://www.facebook.com/Korbit.co.kr</a></div>
              </FooterDataListText>
              <FooterDataListText>
                <div>블로그</div>
                <div>https://blog.naver.com/korbitbiz</div>
              </FooterDataListText>
            </FooterDataList>
          </FooterCommon>
        </div>
      )
  }
} 

export default App;


// ----------------------------------------------------------------------

// Practice Code

// const axios = require('axios');

// { <ThemeProvider theme = {theme}>
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         </ThemeProvider> }
