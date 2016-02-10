
class InterestCalculator {

    /**
     * Instantiate the Class
     *
     * @param  {Object} options
     */
    constructor (options) {
        this.opts = options;
    }

    /**
     * Get the interest rate
     *
     * @return {Number}
     */
    get rate () {
        return this.opts.rate;
    }

    /**
     * Get the term
     *
     * @return {Number}
     */
    get term () {
        return this.opts.term;
    }

    /**
     * Get the amount subject to interest
     *
     * @return {Number}
     */
    get amount () {
        return this.opts.amount;
    }

    /**
     * Set the interest rate
     *
     * @param  {Number} rate
     */
    set rate (rate) {
        this.opts.rate = rate;
    }

    /**
     * Set the payment term
     *
     * @param  {Number} term
     */
    set term (term) {
        this.opts.term = term;
    }

    /**
     * Set the amount
     *
     * @param  {Number} amount
     */
    set amount (amount) {
        this.opts.amount = amount;
    }

    /**
     * Get the monthly interest rate
     *
     * @return {Number}
     */
    getMonthlyInterestRate () {
        return this.rate / 1200;
    }

    /**
     * Calculate the monthly repayment amount
     *
     * @return {Number}
     */
    calculateMonthlyRepayment () {
        let rate = this.getMonthlyInterestRate();

        return this.amount * rate / (1 - (Math.pow(1/(1 + rate), this.term)));
    }

    /**
     * Calculate the total amount payable including interest
     *
     * @return {Number}
     */
    calculateTotalRepayment () {
        return this.calculateMonthlyRepayment() * this.term;
    }

    /**
     * Calculate the total amount of interest payable
     *
     * @return {Number}
     */
    calculateTotalInterest () {
        return this.calculateTotalRepayment() - this.amount;
    }

}

export default InterestCalculator;
