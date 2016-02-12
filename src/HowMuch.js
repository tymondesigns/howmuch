import Tax from './Tax/Tax';

class HowMuch {

    static tax (amount) {
        return new Tax(amount);
    }

}

export default HowMuch;
