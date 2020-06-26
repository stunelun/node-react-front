import { connect } from 'react-redux';
import { actionCreators } from '../actions/'
import currencyArray from '../Routes/currencyArray';



const mapDispatchToProps = (dispatch:any) => (
    {
        CurrencypairClick: (viewCurrencyPair:string) => {
            dispatch(actionCreators.ChangeCurrency(viewCurrencyPair+'_krw'));
        }
    }
)

const ChangeCurrencyPairContainer = connect(
    null,
    mapDispatchToProps
)(currencyArray);

export default ChangeCurrencyPairContainer;