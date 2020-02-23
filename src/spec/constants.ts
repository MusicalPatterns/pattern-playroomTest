// tslint:disable no-magic-numbers

import {
    as,
    Duration,
    musicalAs,
    round,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    SCIENTIFIC_PITCHES,
    Tone,
    Translation,
} from '@musical-patterns/utilities'

const PLAYROOM_TEST_INITIAL_MS_PHYSICALIZATION: Duration = musicalAs.Duration(100)
const PLAYROOM_TEST_INITIAL_HZ_PHYSICALIZATION: Tone = round(
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._8 ],
)
const PLAYROOM_TEST_INITIAL_ARRAYED_SPEC: number[] = [ 0, 1, 1, 2, 3 ]
const PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE: number[] = [ 7, 8, 9 ]
const DIFFERENT: Translation = as.Translation(1)

const PLAYROOM_TEST_LONG_DURATION_INITIAL_MS_PHYSICALIZATION: Duration = musicalAs.Duration(1000)

export {
    PLAYROOM_TEST_INITIAL_MS_PHYSICALIZATION,
    PLAYROOM_TEST_INITIAL_HZ_PHYSICALIZATION,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    DIFFERENT,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_MS_PHYSICALIZATION,
}
