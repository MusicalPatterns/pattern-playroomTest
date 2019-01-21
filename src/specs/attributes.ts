import { SpecPropertyType, standardSpecAttributes, StandardSpecProperties } from '@musical-patterns/pattern'
import { from } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR, PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpecAttributes } from '../types'

const attributes: PlayroomTestSpecAttributes = {
    ...standardSpecAttributes,
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
        formattedName: 'example optioned property one',
        specPropertyType: SpecPropertyType.OPTIONED,
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
        formattedName: 'example optioned property two',
        specPropertyType: SpecPropertyType.OPTIONED,
    },
    toggledProperty: {
        formattedName: 'example on/off property',
        specPropertyType: SpecPropertyType.TOGGLED,
    },
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: {
        constraint: {
            max: from.Scalar(PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR),
            min: from.Scalar(PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR),
        },
        formattedName: 'example ranged property one',
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: {
        formattedName: 'example ranged property two',
        specPropertyType: SpecPropertyType.RANGED,
    },
}

export {
    attributes,
}
