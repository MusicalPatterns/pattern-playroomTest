import { Note, STANDARD_PITCH_SCALE_INDEX, STANDARD_VALUE_SCALE_INDEX } from '@musical-patterns/material'
import { PLAYROOM_TEST_NOTE_PITCH_SCALAR, PLAYROOM_TEST_NOTE_VALUE_SCALAR } from './constants'

const computeNotes: () => Note[] =
    (): Note[] => [ {
        pitch: { scalar: PLAYROOM_TEST_NOTE_PITCH_SCALAR, scaleIndex: STANDARD_PITCH_SCALE_INDEX },
        value: { scalar: PLAYROOM_TEST_NOTE_VALUE_SCALAR, scaleIndex: STANDARD_VALUE_SCALE_INDEX },
    } ]

export {
    computeNotes,
}
