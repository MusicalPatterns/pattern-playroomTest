// tslint:disable:no-magic-numbers

import { Frequency, Millisecond, Scalar, to } from '@musical-patterns/utilities'

const PLAYROOM_TEST_BASE_DURATION: Millisecond = to.Millisecond(100)
const PLAYROOM_TEST_BASE_FREQUENCY: Frequency = to.Frequency(4186)
const PLAYROOM_TEST_MAX_BASE_DURATION: Millisecond = to.Millisecond(1002)
const PLAYROOM_TEST_MIN_BASE_DURATION: Millisecond = to.Millisecond(10)

export {
    PLAYROOM_TEST_BASE_DURATION,
    PLAYROOM_TEST_BASE_FREQUENCY,
    PLAYROOM_TEST_MAX_BASE_DURATION,
    PLAYROOM_TEST_MIN_BASE_DURATION,
}
