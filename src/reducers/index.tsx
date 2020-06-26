import * as types from '../actions/actionTypes';

/* initState */
const initialState = {
    viewCurrencyPair: 'BTC_krw'
};

/* changeStates */
const changeState = (newCurrencyPair:string) => {
    return {
       viewCurrencyPair:newCurrencyPair,  
    }
}

/* reducer */
const reducerChangeCurrencyPair = (state = initialState, action: { type: string; viewCurrencyPair: string; }) => {
    switch (action.type) {
        case types.CHANGECURRENCY:
            return changeState(action.viewCurrencyPair);
        default:
            return state;
    }
}

export default reducerChangeCurrencyPair;