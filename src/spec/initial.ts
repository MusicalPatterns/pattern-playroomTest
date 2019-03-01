import { StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { apply } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_INITIAL_BASE_DURATION, PLAYROOM_TEST_INITIAL_BASE_FREQUENCY } from '../constants'
import {
    DIFFERENT,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_VALUE,
} from './constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from './types'

const onlyPatternParticularInitial: PlayroomTestSpec = {
    arrayedProperty: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    arrayedPropertyWithInitialValue: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_VALUE,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    toggledProperty: true,
}

const onlyStandardInitial: StandardSpec = {
    [ StandardSpecProperties.BASE_DURATION ]: PLAYROOM_TEST_INITIAL_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
}

const initial: PlayroomTestSpec = {
    ...onlyPatternParticularInitial,
    ...onlyStandardInitial,
}

const differentInitial: PlayroomTestSpec = {
    arrayedProperty: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    arrayedPropertyWithInitialValue: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_VALUE,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    toggledProperty: false,
    [ StandardSpecProperties.BASE_DURATION ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_DURATION, DIFFERENT),
    [ StandardSpecProperties.BASE_FREQUENCY ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_FREQUENCY, DIFFERENT),
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initial,
    differentInitial,
}
