// tslint:disable no-magic-numbers

import { as, Duration, Ms, Point } from '@musical-patterns/utilities'

const PLAYROOM_TEST_MAX_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(1003)
const PLAYROOM_TEST_MIN_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(9)

export {
    PLAYROOM_TEST_MAX_BASIS_DURATION,
    PLAYROOM_TEST_MIN_BASIS_DURATION,
}
