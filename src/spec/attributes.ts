import {
    PropertyType,
    RangedInputType,
    standardAttributes,
    StandardProperties,
} from '@musical-patterns/pattern'
import { from } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_BASE_DURATION, PLAYROOM_TEST_MIN_BASE_DURATION } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestAttributes } from './types'

const attributes: PlayroomTestAttributes = {
    ...standardAttributes,
    arrayedProperty: {
        constraint: {
            min: 0,
        },
        formattedName: 'example array of ranged property',
        hideInput: RangedInputType.RANGE,
        isArrayed: true,
        propertyType: PropertyType.RANGED,
    },
    arrayedPropertyWithInitialFieldValue: {
        arrayedNewFieldInitialValue: 6,
        formattedName: 'example array of ranged property, with an initial value for its elements',
        hideInput: RangedInputType.NUMBER,
        isArrayed: true,
        propertyType: PropertyType.RANGED,
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
        propertyType: PropertyType.OPTIONED,
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
        propertyType: PropertyType.OPTIONED,
    },
    stringedProperty: {
        constraint: {
            maxLength: 4,
            minLength: 3,
        },
        formattedName: `example property that's a string`,
        order: 6,
        propertyType: PropertyType.STRINGED,
    },
    toggledProperty: {
        formattedName: 'example on/off property',
        order: 1,
        propertyType: PropertyType.TOGGLED,
    },
    [ StandardProperties.BASE_DURATION ]: {
        ...standardAttributes[ StandardProperties.BASE_DURATION ],
        constraint: {
            excludeMax: true,
            excludeMin: true,
            max: from.Ms(PLAYROOM_TEST_MAX_BASE_DURATION),
            min: from.Ms(PLAYROOM_TEST_MIN_BASE_DURATION),
        },
        formattedName: 'example ranged property one',
        order: 2,
    },
    [ StandardProperties.BASE_FREQUENCY ]: {
        ...standardAttributes[ StandardProperties.BASE_DURATION ],
        description: 'I need to describe something to you and it is super cereal you guys',
        formattedName: 'example ranged property two',
        hideInput: RangedInputType.RANGE,
        order: 3,
    },
}

export {
    attributes,
}
