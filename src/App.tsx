import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import LinkTest             from './Components/header/LInkTest';
import {Home} from './pages';

// function App () {}   <=== Q. 클래스로 할 때와 함수로 할 때의 차이점은...??
// 1.React Component를 확장한다는 점
// 2.함수로 할 경우, 랜더링 부분을 안넣어줘도 된다. (이유는...?)
// 3. 그 외에는...?
class App extends Component {
  constructor(props:any){
    super(props);
    this.state = {
      viewCurrencyPair : "BTC_krw"
    }
  }
  render(){
    return (
        <BrowserRouter>
          <Route path="/" component={Home}/>
        </BrowserRouter>
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
