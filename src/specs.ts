import { PatternSpecPropertyType } from '@musical-patterns/pattern'
import { apply, from, to } from '@musical-patterns/utilities'
import {
    PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR,
    PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR,
    PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
} from './constants'
import {
    OptionedPropertyOneOptions,
    OptionedPropertyTwoOptions,
    PlayroomTestPatternSpec,
    PlayroomTestPatternSpecAttributes,
} from './types'

const specAttributes: PlayroomTestPatternSpecAttributes = {
    optionedPropertyOne: {
        constraint: Object.values(OptionedPropertyOneOptions),
        patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
    },
    optionedPropertyTwo: {
        constraint: Object.values(OptionedPropertyTwoOptions),
        patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
    },
    patternDurationScalar: {
        constraint: {
            max: from.Scalar(PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR),
            min: from.Scalar(PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR),
        },
        formattedName: 'ranged property one',
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternPitchScalar: {
        formattedName: 'ranged property two',
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

const initialSpec: PlayroomTestPatternSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    patternDurationScalar: PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    patternPitchScalar: PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
}

const otherInitialSpec: PlayroomTestPatternSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    patternDurationScalar: apply.Offset(PLAYROOM_TEST_PATTERN_DURATION_SCALAR, to.Offset(1)),
    patternPitchScalar: apply.Offset(PLAYROOM_TEST_PATTERN_PITCH_SCALAR, to.Offset(1)),
}

export {
    initialSpec,
    otherInitialSpec,
    specAttributes,
}
