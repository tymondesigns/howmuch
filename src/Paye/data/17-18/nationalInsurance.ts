import { BandInterface } from '../../Contracts'

/**
 * Define the rates for Class 1 contributions
 */
const NI_BANDS: BandInterface[] = [
  { min: 0, rate: 0 },
  { min: 8164, rate: 0.12 },
  { min: 45034, rate: 0.02 }
]

/**
 * Define the rates for Class 2 and 4 contributions
 */
const NI_BANDS_SE: BandInterface[] = [
  { min: 0, rate: 0 },
  { min: 6025, rate: 148.2, flat: true }, // Class 2 flat rate
  { min: 8164, rate: 0.09 }, // Class 4 onwards
  { min: 45034, rate: 0.02 }
]

export default {
  NI_BANDS,
  NI_BANDS_SE
}
