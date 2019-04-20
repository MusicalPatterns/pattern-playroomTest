// tslint:disable no-magic-numbers

import {
    as,
    Hz,
    Ms,
    ofNotAs,
    round,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Translation,
} from '@musical-patterns/utilities'

const PLAYROOM_TEST_INITIAL_BASE_DURATION: Scalar<Ms> = as.Scalar<Ms>(100)
const PLAYROOM_TEST_INITIAL_BASE_FREQUENCY: Scalar<Hz> = as.Scalar(ofNotAs(round(
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._8 ],
)))
const PLAYROOM_TEST_INITIAL_ARRAYED_SPEC: number[] = [ 0, 1, 1, 2, 3 ]
const PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE: number[] = [ 7, 8, 9 ]
const DIFFERENT: Translation = as.Translation(1)

const PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION: Scalar<Ms> = as.Scalar<Ms>(1000)

export {
    PLAYROOM_TEST_INITIAL_BASE_DURATION,
    PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    DIFFERENT,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION,
}
