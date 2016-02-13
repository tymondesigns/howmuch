import Tax from './Tax/Tax';

class HowMuch {

    static incomeTax (options) {
        return new Tax(options).incomeTax();
    }

    static nationalInsurance (options) {
        return new Tax(options).nationalInsurance();
    }

    static tax (options) {
        return new Tax(options, false);
    }

    static income (options) {
        return new Tax(options, true);
    }

}

export default HowMuch;
