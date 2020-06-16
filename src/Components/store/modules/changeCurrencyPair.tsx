import { createStore } from 'redux';

const CHANGECURRENCY = "CHANGECURRENCY"

/* action */
export const ChangeCurrency = (viewCurrencyPair:string) => ({
    type: CHANGECURRENCY,
    viewCurrencyPair
});
export const actionCreators = {
    ChangeCurrency,
};

/* state */
const initialState = {
    viewCurrencyPair: 'BTC_krw'
};
const changeState = (newCurrencyPair:string) => {
    return {
       viewCurrencyPair:newCurrencyPair,  
    }
}

/* reducer */
export const reducerChangeCurrencyPair = (state = initialState, action: { type: string; viewCurrencyPair: string; }) => {
    switch (action.type) {
        case CHANGECURRENCY:
            return changeState(action.viewCurrencyPair);
        default:
            return state;
    }
}

/* create store */
const store = createStore(reducerChangeCurrencyPair);

export default store;