import React from 'react';
import FooterDataListText from './FooterDataListText';
import FooterDataListCss from './styles';

const Footer = () => {
    return (
        <FooterDataListCss>
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
        </FooterDataListCss>
    );
};

export default Footer;