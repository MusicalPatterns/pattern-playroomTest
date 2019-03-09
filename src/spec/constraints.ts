import { OptionedConstraint, RangedConstraint, StandardProperties, StringedConstraint } from '@musical-patterns/pattern'
import { DictionaryOf, from } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_BASE_DURATION, PLAYROOM_TEST_MIN_BASE_DURATION } from '../constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestProperty } from './types'

const rangedConstraints: DictionaryOf<RangedConstraint> = {
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: {
        min: 0,
    },
    [ StandardProperties.BASE_DURATION ]: {
        excludeMax: true,
        excludeMin: true,
        max: from.Ms(PLAYROOM_TEST_MAX_BASE_DURATION),
        min: from.Ms(PLAYROOM_TEST_MIN_BASE_DURATION),
    },
}

const optionedConstraints: DictionaryOf<OptionedConstraint> = {
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: [
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
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: [
        {
            formattedName: 'Option the First',
            key: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
        },
        {
            description: 'Option the Second has no formatted name, but it sure does have a description!',
            key: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
        },
    ],
}

const stringedConstraints: DictionaryOf<StringedConstraint> = {
    [ PlayroomTestProperty.STRINGED_PROPERTY ]: {
        maxLength: 4,
        minLength: 3,
    },
}

export {
    rangedConstraints,
    optionedConstraints,
    stringedConstraints,
}
