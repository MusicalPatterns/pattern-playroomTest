// tslint:disable no-magic-numbers

import { Ms, Scalar, to } from '@musical-patterns/utilities'

const PLAYROOM_TEST_MAX_BASE_DURATION: Scalar<Ms> = to.Scalar(to.Ms(1003))
const PLAYROOM_TEST_MIN_BASE_DURATION: Scalar<Ms> = to.Scalar(to.Ms(9))

export {
    PLAYROOM_TEST_MAX_BASE_DURATION,
    PLAYROOM_TEST_MIN_BASE_DURATION,
}
