import { StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, to } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_INITIAL_BASE_DURATION, PLAYROOM_TEST_INITIAL_BASE_FREQUENCY } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from '../types'
import { PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY } from './constants'

const onlyPatternParticularInitial: PlayroomTestSpec = {
    arrayedProperty: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
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
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    toggledProperty: false,
    [ StandardSpecProperties.BASE_DURATION ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_DURATION, to.Translation(1)),
    [ StandardSpecProperties.BASE_FREQUENCY ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_FREQUENCY, to.Translation(1)),
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initial,
    differentInitial,
}
