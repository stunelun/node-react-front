import { combineReducers } from 'redux';
import {reducerChangeCurrencyPair} from './changeCurrencyPair';

export default combineReducers(
    {
        ChangeCurrencyPair: reducerChangeCurrencyPair,
    // another reducer import...
    }
);