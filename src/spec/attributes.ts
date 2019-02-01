import {
    RangedInputType,
    SpecPropertyType,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { from } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_BASE_DURATION, PLAYROOM_TEST_MIN_BASE_DURATION } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpecAttributes } from '../types'

const attributes: PlayroomTestSpecAttributes = {
    ...standardSpecAttributes,
    arrayedProperty: {
        constraint: {
            min: 0,
        },
        formattedName: 'example array of ranged property',
        isArrayed: true,
        specPropertyType: SpecPropertyType.RANGED,
    },
    optionedPropertyOne: {
        constraint: [
            {
                formattedName: 'Option one',
                key: OptionedPropertyOneOptions.OPTION_ONE,
            },
            {
                formattedName: 'Option two',
                key: OptionedPropertyOneOptions.OPTION_TWO,
                order: 1,
            },
            {
                formattedName: 'Option three',
                key: OptionedPropertyOneOptions.OPTION_THREE,
                order: 2,
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
                description: 'Option the Second has no formatted name, but it sure does have a description!',
                key: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
            },
        ],
        formattedName: 'example optioned property two',
        specPropertyType: SpecPropertyType.OPTIONED,
    },
    toggledProperty: {
        formattedName: 'example on/off property',
        order: 1,
        specPropertyType: SpecPropertyType.TOGGLED,
    },
    [ StandardSpecProperties.BASE_DURATION ]: {
        ...standardSpecAttributes[ StandardSpecProperties.BASE_DURATION ],
        constraint: {
            excludeMax: true,
            excludeMin: true,
            max: from.Milliseconds(PLAYROOM_TEST_MAX_BASE_DURATION),
            min: from.Milliseconds(PLAYROOM_TEST_MIN_BASE_DURATION),
        },
        formattedName: 'example ranged property one',
        order: 2,
    },
    [ StandardSpecProperties.BASE_FREQUENCY ]: {
        ...standardSpecAttributes[ StandardSpecProperties.BASE_DURATION ],
        description: 'I need to describe something to you and it is super cereal you guys',
        formattedName: 'example ranged property two',
        hideInput: RangedInputType.RANGE,
        order: 3,
    },
}

export {
    attributes,
}
