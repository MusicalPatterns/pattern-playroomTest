// tslint:disable no-magic-numbers

import {
    as,
    Duration,
    Ms,
    Pitch,
    round,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Translation,
} from '@musical-patterns/utilities'

const PLAYROOM_TEST_INITIAL_BASIS_DURATION: Duration = as.Delta<Ms>(100)
const PLAYROOM_TEST_INITIAL_BASIS_FREQUENCY: Pitch = round(
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._8 ],
)
const PLAYROOM_TEST_INITIAL_ARRAYED_SPEC: number[] = [ 0, 1, 1, 2, 3 ]
const PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE: number[] = [ 7, 8, 9 ]
const DIFFERENT: Translation = as.Translation(1)

const PLAYROOM_TEST_LONG_DURATION_INITIAL_BASIS_DURATION: Duration = as.Delta<Ms>(1000)

export {
    PLAYROOM_TEST_INITIAL_BASIS_DURATION,
    PLAYROOM_TEST_INITIAL_BASIS_FREQUENCY,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    DIFFERENT,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_BASIS_DURATION,
}
