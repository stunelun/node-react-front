import { createStore } from 'redux';

const changeCurrnecy = "CHANGECURRENCY"

/* action */
export const ChangeCurrency = (viewCurrencyPair:string) => ({
    type: changeCurrnecy,
    viewCurrencyPair
});
export const actionCreators = {
    ChangeCurrency,
};

/* init state */
const initialState = [{
    viewCurrencyPair: 'btc_krw'
}];


/* reducer */
export const reducerChangeCurrencyPair = (state = initialState, action: { type: string; currencyName: string; }) => {
    switch (action.type) {
        case changeCurrnecy:
            console.log('changeCurrencyName Test : ', action.currencyName);
            return {
                ...state,
                viewCurrencyPair:action.currencyName,
            }
        default:
            console.log('default state Test : ', state);
            return state;
    }
}

/* create store */
const store = createStore(reducerChangeCurrencyPair);

export default store;