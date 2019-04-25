import { OptionedConstraint, RangedConstraint, StandardSpec, StringedConstraint } from '@musical-patterns/spec'
import { Ms, notAs, ObjectOf } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_BASIS_DURATION, PLAYROOM_TEST_MIN_BASIS_DURATION } from '../constants'
import { OptionedSpecOneOption, OptionedSpecTwoOption, PlayroomTestSpec } from './types'

const rangedConstraints: ObjectOf<RangedConstraint> = {
    [ PlayroomTestSpec.ARRAYED_SPEC ]: {
        min: 0,
    },
    [ StandardSpec.BASIS_DURATION ]: {
        excludeMax: true,
        excludeMin: true,
        integer: true,
        max: notAs.Delta<Ms>(PLAYROOM_TEST_MAX_BASIS_DURATION),
        min: notAs.Delta<Ms>(PLAYROOM_TEST_MIN_BASIS_DURATION),
    },
}

const optionedConstraints: ObjectOf<OptionedConstraint> = {
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: [
        {
            formattedName: 'Option one',
            value: OptionedSpecOneOption.OPTION_ONE,
        },
        {
            formattedName: 'Option two',
            order: 1,
            value: OptionedSpecOneOption.OPTION_TWO,
        },
        {
            formattedName: 'Option three',
            order: 2,
            value: OptionedSpecOneOption.OPTION_THREE,
        },
    ],
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO ]: [
        {
            formattedName: 'Option the First',
            value: OptionedSpecTwoOption.OPTION_THE_FIRST,
        },
        {
            description: 'Option the Second has no formatted name, but it sure does have a description!',
            value: OptionedSpecTwoOption.OPTION_THE_SECOND,
        },
    ],
}

const stringedConstraints: ObjectOf<StringedConstraint> = {
    [ PlayroomTestSpec.STRINGED_SPEC ]: {
        maxLength: 4,
        minLength: 3,
    },
}

export {
    rangedConstraints,
    optionedConstraints,
    stringedConstraints,
}
