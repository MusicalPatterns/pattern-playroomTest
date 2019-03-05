import { StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { apply } from '@musical-patterns/utilities'
import {
    DIFFERENT,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    PLAYROOM_TEST_INITIAL_BASE_DURATION,
    PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION,
} from './constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from './types'

const onlyPatternParticularInitial: PlayroomTestSpec = {
    arrayedProperty: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    arrayedPropertyWithInitialElementValue: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    stringedProperty: 'ABC',
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
    arrayedPropertyWithInitialElementValue: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    stringedProperty: 'ABF',
    toggledProperty: false,
    [ StandardSpecProperties.BASE_DURATION ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_DURATION, DIFFERENT),
    [ StandardSpecProperties.BASE_FREQUENCY ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_FREQUENCY, DIFFERENT),
}

const longDurationInitial: PlayroomTestSpec = {
    ...initial,
    [ StandardSpecProperties.BASE_DURATION ]: PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION,
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initial,
    differentInitial,
    longDurationInitial,
}
