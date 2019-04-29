import { Note, STANDARD_DURATION_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/material'
import { PLAYROOM_TEST_NOTE_DURATION_SCALAR, PLAYROOM_TEST_NOTE_PITCH_SCALAR } from './constants'

const computeNotes: () => Note[] =
    (): Note[] => [ {
        duration: { scalar: PLAYROOM_TEST_NOTE_DURATION_SCALAR, scaleIndex: STANDARD_DURATION_SCALE_INDEX },
        pitch: { scalar: PLAYROOM_TEST_NOTE_PITCH_SCALAR, scaleIndex: STANDARD_PITCH_SCALE_INDEX },
    } ]

export {
    computeNotes,
}
