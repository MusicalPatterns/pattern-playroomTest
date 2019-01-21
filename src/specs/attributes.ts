import { SpecPropertyType, standardSpecAttributes, StandardSpecProperties } from '@musical-patterns/pattern'
import { from } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_BASE_DURATION, PLAYROOM_TEST_MIN_BASE_DURATION } from '../constants'
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
    [ StandardSpecProperties.BASE_DURATION ]: {
        constraint: {
            max: from.Millisecond(PLAYROOM_TEST_MAX_BASE_DURATION),
            min: from.Millisecond(PLAYROOM_TEST_MIN_BASE_DURATION),
        },
        formattedName: 'example ranged property one',
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.BASE_FREQUENCY ]: {
        formattedName: 'example ranged property two',
        specPropertyType: SpecPropertyType.RANGED,
    },
}

export {
    attributes,
}
