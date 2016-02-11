import Tax from './Tax';

class Pay {

    static tax (options) {
        return new Tax(options);
    }

}

export default Pay;
