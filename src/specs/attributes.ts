import { PatternSpecPropertyType, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { from } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR, PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestPatternSpecAttributes } from '../types'

const attributes: PlayroomTestPatternSpecAttributes = {
    optionedPropertyOne: {
        constraint: [
            {
                formattedName: 'Option one',
                key: OptionedPropertyOneOptions.OPTION_ONE,
            },
            {
                formattedName: 'Option two',
                key: OptionedPropertyOneOptions.OPTION_TWO,
            },
        ],
        patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
    },
    optionedPropertyTwo: {
        constraint: [
            {
                formattedName: 'Option the First',
                key: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
            },
            {
                formattedName: 'Option the Second',
                key: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
            },
        ],
        patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
    },
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: {
        constraint: {
            max: from.Scalar(PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR),
            min: from.Scalar(PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR),
        },
        formattedName: 'ranged property one',
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: {
        formattedName: 'ranged property two',
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

export {
    attributes,
}
