import { Note } from '@musical-patterns/material'
import { PLAYROOM_TEST_NOTE_PITCH_SCALAR, PLAYROOM_TEST_NOTE_VALUE_SCALAR } from './constants'

const computeNotes: () => Note[] =
    (): Note[] => [ {
        pitch: { scalar: PLAYROOM_TEST_NOTE_PITCH_SCALAR },
        value: { scalar: PLAYROOM_TEST_NOTE_VALUE_SCALAR },
    } ]

export {
    computeNotes,
}
