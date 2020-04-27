import React from 'react';
import NavHeadList from './NavHeadList/NavHeadList';
import HeaderCss from './styles';

class Header extends React.Component {
    render() {
        return (
            <HeaderCss>
                <NavHeadList />
            </HeaderCss>
        );
    };
};

export default Header;