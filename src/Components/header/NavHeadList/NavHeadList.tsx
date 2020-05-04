import React from 'react';
import NavHeadListCss from './styles';

const NavHeadList = () => {
    return (
        <NavHeadListCss>
            <li className="title">Korbit_CandleChart</li> 
            <li><a className="item1">거래하기</a></li>
            <li><a className="item2" >입출금</a></li>
            <li><a className="item3" href='/CandleChart'>캔들차트</a></li>
            <li><a className="yarn item4">n:4</a></li>
            <li><a className="itemn">n:...n</a></li>
        </NavHeadListCss>
    )
};

export default NavHeadList;