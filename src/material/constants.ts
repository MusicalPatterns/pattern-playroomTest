// tslint:disable no-magic-numbers

import { as, Hz, Ms, ONE_HALF, Scalar } from '@musical-patterns/utilities'

const PLAYROOM_TEST_BASE_DURATION_SCALAR: Scalar<Scalar<Ms>> = as.Scalar<Scalar<Ms>>(15)
const PLAYROOM_TEST_BASE_FREQUENCY_SCALAR: Scalar<Scalar<Hz>> = ONE_HALF

export {
    PLAYROOM_TEST_BASE_DURATION_SCALAR,
    PLAYROOM_TEST_BASE_FREQUENCY_SCALAR,
}
