import { StandardPatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { apply, to } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_PATTERN_DURATION_SCALAR, PLAYROOM_TEST_PATTERN_PITCH_SCALAR } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestPatternSpec } from '../types'

const onlyPatternSpecificInitial: PlayroomTestPatternSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    toggledProperty: true,
}

const onlyStandardInitial: StandardPatternSpec = {
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
}

const initial: PlayroomTestPatternSpec = {
    ...onlyPatternSpecificInitial,
    ...onlyStandardInitial,
}

const differentInitial: PlayroomTestPatternSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    toggledProperty: false,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]:
        apply.Offset(PLAYROOM_TEST_PATTERN_DURATION_SCALAR, to.Offset(1)),
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]:
        apply.Offset(PLAYROOM_TEST_PATTERN_PITCH_SCALAR, to.Offset(1)),
}

export {
    onlyPatternSpecificInitial,
    onlyStandardInitial,
    initial,
    differentInitial,
}
