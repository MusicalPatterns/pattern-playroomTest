// tslint:disable no-magic-numbers

import {
    Hz,
    Ms,
    round,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const PLAYROOM_TEST_INITIAL_BASE_DURATION: Ms = to.Ms(100)
const PLAYROOM_TEST_INITIAL_BASE_FREQUENCY: Hz = round(
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._8 ],
)
const PLAYROOM_TEST_MAX_BASE_DURATION: Ms = to.Ms(1003)
const PLAYROOM_TEST_MIN_BASE_DURATION: Ms = to.Ms(9)

export {
    PLAYROOM_TEST_INITIAL_BASE_DURATION,
    PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
    PLAYROOM_TEST_MAX_BASE_DURATION,
    PLAYROOM_TEST_MIN_BASE_DURATION,
}
