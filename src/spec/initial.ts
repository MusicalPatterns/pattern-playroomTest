import { StandardProperties, StandardSpec } from '@musical-patterns/pattern'
import { apply } from '@musical-patterns/utilities'
import {
    DIFFERENT,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    PLAYROOM_TEST_INITIAL_BASE_DURATION,
    PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION,
} from './constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestProperty, PlayroomTestSpec } from './types'

const onlyPatternParticularInitial: PlayroomTestSpec = {
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    [ PlayroomTestProperty.ARRAYED_PROPERTY_WITH_INITIAL_FIELD_VALUE ]:
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: OptionedPropertyOneOptions.OPTION_TWO,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    [ PlayroomTestProperty.STRINGED_PROPERTY ]: 'ABC',
    [ PlayroomTestProperty.TOGGLED_PROPERTY ]: true,
}

const onlyStandardInitial: StandardSpec = {
    [ StandardProperties.BASE_DURATION ]: PLAYROOM_TEST_INITIAL_BASE_DURATION,
    [ StandardProperties.BASE_FREQUENCY ]: PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
}

const initial: PlayroomTestSpec = {
    ...onlyPatternParticularInitial,
    ...onlyStandardInitial,
}

const differentInitial: PlayroomTestSpec = {
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    [ PlayroomTestProperty.ARRAYED_PROPERTY_WITH_INITIAL_FIELD_VALUE ]:
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: OptionedPropertyOneOptions.OPTION_ONE,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    [ PlayroomTestProperty.STRINGED_PROPERTY ]: 'ABF',
    [ PlayroomTestProperty.TOGGLED_PROPERTY ]: false,
    [ StandardProperties.BASE_DURATION ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_DURATION, DIFFERENT),
    [ StandardProperties.BASE_FREQUENCY ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_FREQUENCY, DIFFERENT),
}

const longDurationInitial: PlayroomTestSpec = {
    ...initial,
    [ StandardProperties.BASE_DURATION ]: PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION,
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initial,
    differentInitial,
    longDurationInitial,
}
