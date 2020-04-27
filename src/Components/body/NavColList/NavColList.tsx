import React from 'react';
import CurrencyArray from '../../../Routes/currencyArray';
import NavColListCss from './styles';

class NavColList extends React.Component {
    render() {
        return (
            <NavColListCss>
                <li className='title'>CurrencyPair</li>
                <CurrencyArray />
            </NavColListCss>
        );
    };
};

export default NavColList;