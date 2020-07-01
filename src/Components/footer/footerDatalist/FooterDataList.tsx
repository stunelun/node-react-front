import React from 'react';
import FooterDataListCss from './styles';

const Footer = () => {
    return (
        <FooterDataListCss>
            <li>
                <p>(주) 코빗</p>
                <p>서울특별시 강남구 테헤란로5길 7, 4층</p>
            </li>
            <li>
                <p>대표</p>
                <p>오세진</p>
            </li>
            <li>
                <p>제휴 및 법인등록</p>
                <p>biz@korbit.co.kr</p>
            </li>
            <li>
                <p>고객센터 | E-mail</p>
                <p>1661-9707 | info@korbit.co.kr</p>
            </li>
            <li>
                <p>페이스북</p>
                <p><a>https://www.facebook.com/Korbit.co.kr</a></p>
            </li>
            <li>
                <p>블로그</p>
                <p>https://blog.naver.com/korbitbiz</p>
            </li>
        </FooterDataListCss>
    );
};

export default Footer;