// tslint:disable no-magic-numbers

import { Hz, Ms, ONE_HALF, Scalar, to } from '@musical-patterns/utilities'

const PLAYROOM_TEST_BASE_DURATION_SCALAR: Scalar<Scalar<Ms>> = to.Scalar<Scalar<Ms>>(15)
const PLAYROOM_TEST_BASE_FREQUENCY_SCALAR: Scalar<Scalar<Hz>> = ONE_HALF

export {
    PLAYROOM_TEST_BASE_DURATION_SCALAR,
    PLAYROOM_TEST_BASE_FREQUENCY_SCALAR,
}
