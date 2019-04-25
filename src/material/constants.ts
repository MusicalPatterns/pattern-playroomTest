// tslint:disable no-magic-numbers

import { as, Duration, Pitch, Scalar } from '@musical-patterns/utilities'

const PLAYROOM_TEST_BASIS_DURATION_SCALAR: Scalar<Duration> = as.Scalar<Duration>(15)
const PLAYROOM_TEST_BASIS_FREQUENCY_SCALAR: Scalar<Pitch> = as.Scalar<Pitch>(0.5)

export {
    PLAYROOM_TEST_BASIS_DURATION_SCALAR,
    PLAYROOM_TEST_BASIS_FREQUENCY_SCALAR,
}
