export default {

    /**
     * Define the rates for Class 1 contributions
     *
     * @type {Array}
     */
    NI_BANDS: [
        { min: 0, rate: 0 },
        { min: 8060, rate: 0.12 },
        { min: 42386, rate: 0.02 }
    ],

    /**
     * Define the rates for Class 2 and 4 contributions
     *
     * @type {Array}
     */
    NI_BANDS_SE: [
        { min: 0, rate: 0 },
        { min: 5965, rate: 145.6, flat: true }, // Class 2 flat rate
        { min: 8060, rate: 0.09 }, // Class 4 onwards
        { min: 42386, rate: 0.02 }
    ]
};
