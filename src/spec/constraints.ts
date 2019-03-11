import { OptionedConstraint, RangedConstraint, StandardProperty, StringedConstraint } from '@musical-patterns/pattern'
import { from, ObjectOf } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_BASE_DURATION, PLAYROOM_TEST_MIN_BASE_DURATION } from '../constants'
import { OptionedPropertyOneOption, OptionedPropertyTwoOption, PlayroomTestProperty } from './types'

const rangedConstraints: ObjectOf<RangedConstraint> = {
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: {
        min: 0,
    },
    [ StandardProperty.BASE_DURATION ]: {
        excludeMax: true,
        excludeMin: true,
        max: from.Ms(PLAYROOM_TEST_MAX_BASE_DURATION),
        min: from.Ms(PLAYROOM_TEST_MIN_BASE_DURATION),
    },
}

const optionedConstraints: ObjectOf<OptionedConstraint> = {
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: [
        {
            formattedName: 'Option one',
            value: OptionedPropertyOneOption.OPTION_ONE,
        },
        {
            formattedName: 'Option two',
            order: 1,
            value: OptionedPropertyOneOption.OPTION_TWO,
        },
        {
            formattedName: 'Option three',
            order: 2,
            value: OptionedPropertyOneOption.OPTION_THREE,
        },
    ],
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: [
        {
            formattedName: 'Option the First',
            value: OptionedPropertyTwoOption.OPTION_THE_FIRST,
        },
        {
            description: 'Option the Second has no formatted name, but it sure does have a description!',
            value: OptionedPropertyTwoOption.OPTION_THE_SECOND,
        },
    ],
}

const stringedConstraints: ObjectOf<StringedConstraint> = {
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
