import { Note } from '@musical-patterns/material'
import { Thunk } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_NOTE_PITCH_SCALAR, PLAYROOM_TEST_NOTE_VALUE_SCALAR } from './constants'

const thunkNotes: Thunk<Note[]> =
    (): Note[] => [ {
        pitch: { scalar: PLAYROOM_TEST_NOTE_PITCH_SCALAR },
        value: { scalar: PLAYROOM_TEST_NOTE_VALUE_SCALAR },
    } ]

export {
    thunkNotes,
}
