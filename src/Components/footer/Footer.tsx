import React from 'react';
import FooterDataList from './footerDatalist/FooterDataList';
import FooterDataListText from './footerDatalist/FooterDataListText';
import FooterCss from './styles';

const Footer = () => {
    return (
        <>
            <FooterCss>
                <FooterDataList />
            </FooterCss>
        </>
    )
}

export default Footer;