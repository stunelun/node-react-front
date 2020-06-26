import * as actionTypes from './actionTypes';

/* action */
export const ChangeCurrency = (viewCurrencyPair:string) => ({
    type: actionTypes.CHANGECURRENCY,
    viewCurrencyPair
});

export const actionCreators = {
    ChangeCurrency,
};