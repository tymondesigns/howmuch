import TaxBandCalculator from '../Utils/TaxBandCalculator';
import data from '../data/2015-16/ni';

class NationalInsuranceCalculator extends TaxBandCalculator {

    constructor (gross, selfEmployed = false) {
        super({ gross, bands: selfEmployed ? data.NI_BANDS_SE : data.NI_BANDS });
        this.gross = gross;
    }

}

export default NationalInsuranceCalculator;
