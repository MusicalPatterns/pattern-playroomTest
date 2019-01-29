// tslint:disable:no-magic-numbers

import { Frequency, Milliseconds, Scalar, to } from '@musical-patterns/utilities'

const PLAYROOM_TEST_INITIAL_BASE_DURATION: Milliseconds = to.Milliseconds(100)
const PLAYROOM_TEST_INITIAL_BASE_FREQUENCY: Frequency = to.Frequency(4186)
const PLAYROOM_TEST_MAX_BASE_DURATION: Milliseconds = to.Milliseconds(1002)
const PLAYROOM_TEST_MIN_BASE_DURATION: Milliseconds = to.Milliseconds(10)

export {
    PLAYROOM_TEST_INITIAL_BASE_DURATION,
    PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
    PLAYROOM_TEST_MAX_BASE_DURATION,
    PLAYROOM_TEST_MIN_BASE_DURATION,
}
