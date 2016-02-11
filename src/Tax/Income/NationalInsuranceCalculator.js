import TaxBandCalculator from '../Utils/TaxBandCalculator';

class NationalInsuranceCalculator extends TaxBandCalculator {

    constructor (gross, selfEmployed = false, data) {
        super({ gross, bands: selfEmployed ? data.NI_BANDS_SE : data.NI_BANDS });
        this.gross = gross;
    }

}

export default NationalInsuranceCalculator;
