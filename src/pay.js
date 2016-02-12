import Tax from './Tax/Tax';

class Pay {

    static tax (amount) {
        return new Tax(amount);
    }

}

export default Pay;
