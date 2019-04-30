// tslint:disable no-magic-numbers

import { as, Pitch, Scalar, Value } from '@musical-patterns/utilities'

const PLAYROOM_TEST_NOTE_VALUE_SCALAR: Scalar<Value> = as.Scalar<Value>(15)
const PLAYROOM_TEST_NOTE_PITCH_SCALAR: Scalar<Pitch> = as.Scalar<Pitch>(0.5)

export {
    PLAYROOM_TEST_NOTE_VALUE_SCALAR,
    PLAYROOM_TEST_NOTE_PITCH_SCALAR,
}
