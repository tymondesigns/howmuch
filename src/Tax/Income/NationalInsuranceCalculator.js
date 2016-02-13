import TaxBandCalculator from '../Utils/TaxBandCalculator';

class NationalInsuranceCalculator extends TaxBandCalculator {

    /**
     * Instantiate the Class
     *
     * @param  {Number}   gross
     * @param  {Boolean}  selfEmployed
     * @param  {Object}   data
     */
    constructor (gross, selfEmployed = false, data) {
        super({ gross, bands: selfEmployed ? data.NI_BANDS_SE : data.NI_BANDS });
        this.gross = gross;
    }

}

export default NationalInsuranceCalculator;
