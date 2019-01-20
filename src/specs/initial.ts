import { StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, to } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_PATTERN_DURATION_SCALAR, PLAYROOM_TEST_PATTERN_PITCH_SCALAR } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from '../types'

const onlyPatternParticularInitial: PlayroomTestSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    toggledProperty: true,
}

const onlyStandardInitial: StandardSpec = {
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
}

const initial: PlayroomTestSpec = {
    ...onlyPatternParticularInitial,
    ...onlyStandardInitial,
}

const differentInitial: PlayroomTestSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    toggledProperty: false,
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]:
        apply.Offset(PLAYROOM_TEST_PATTERN_DURATION_SCALAR, to.Offset(1)),
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]:
        apply.Offset(PLAYROOM_TEST_PATTERN_PITCH_SCALAR, to.Offset(1)),
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initial,
    differentInitial,
}
