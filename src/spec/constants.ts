// tslint:disable no-magic-numbers

import { to, Translation } from '@musical-patterns/utilities'

const PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY: number[] = [ 0, 1, 1, 2, 3 ]
const PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE: number[] = [ 7, 8, 9 ]
const DIFFERENT: Translation = to.Translation(1)

export {
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    DIFFERENT,
}
