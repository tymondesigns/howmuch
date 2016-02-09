export default {

    /**
     * The value that can be earned before paying any tax
     *
     * @type {Integer}
     */
    TAX_FREE_ALLOWANCE: 10600,

    /**
     * The amount at which the tax free allowance is reduced
     *
     * @type {Integer}
     */
    TAX_FREE_ALLOWANCE_LIMIT: 100000,

    /**
     * The amount at which the tax free allowance is removed
     *
     * @type {Integer}
     */
    TAX_FREE_ALLOWANCE_UPPER_LIMIT: 121200,

    /**
     * The rate to apply to the tax free allowance when it reaches the
     * threshold
     *
     * @type {Number}
     */
    TAX_FREE_ALLOWANCE_LIMIT_RATE: 0.5,

    /**
     * The various tax bands
     *
     * @type {Array}
     */
    INCOME_TAX_BANDS: [
        { min: 0, rate: 0.2 }, // Basic rate
        { min: 31786, rate: 0.4 }, // Higher Rate
        { min: 150000, rate: 0.45 } // Additional Rate
    ]
};
