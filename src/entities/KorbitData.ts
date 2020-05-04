import {Component} from 'react';

class KorbitData extends Component {
    seq!: number;
    currencyPair!: string;
    timestamp!: number;
    last!: number;
    
    /**
     * set KorbitData parameters of Korbit's API data to use Mysql Options.
     * @param currencyPair : btc_krw, xrp_krw, etc...
     * @param timestamp : updated data time.
     * @param last  : last updated data
     */
    public setter (currencyPair: string, timestamp: number, last: number) {
        this.currencyPair = currencyPair;
        this.timestamp = timestamp;
        this.last = last;
    };
}

export default KorbitData;