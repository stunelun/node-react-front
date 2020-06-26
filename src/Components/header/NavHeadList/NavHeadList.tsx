import React, { Component } from 'react';
import NavHaedListCss, {setTextColor} from './styles';

class NavHeadList extends Component {
    state = {
        onTitle: "",
        onColor: ""
    }
    
    handleChangeColor = (chkTitle: string) => {
        this.setState({
            onTitle: chkTitle,
            onColor: "orange"
        });
    }

    render (){
        setTextColor(this.state.onTitle, this.state.onColor);
        return (
            <NavHaedListCss>
                <li className="title">Korbit_CandleChart</li> 
                <li><a className="item1" onClick={() => this.handleChangeColor("item1")}>거래하기</a></li>
                <li><a className="item2">입출금</a></li>
                <li><a className="item3" href='/CandleChart' onClick={() => this.handleChangeColor("item3")}>캔들차트</a></li>
                <li><a className="item4">계정활동</a></li>
                <li><a className="itemn">공지사항</a></li>
            </NavHaedListCss>
        )
    } 
    
}

export default NavHeadList;