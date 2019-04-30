import { OptionedConstraint, RangedConstraint, StandardSpec, StringedConstraint } from '@musical-patterns/spec'
import { as, ObjectOf } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_MAX_MS_PHYSICALIZATION, PLAYROOM_TEST_MIN_MS_PHYSICALIZATION } from '../constants'
import { OptionedSpecOneOption, OptionedSpecTwoOption, PlayroomTestSpec } from './types'

const rangedConstraints: ObjectOf<RangedConstraint> = {
    [ PlayroomTestSpec.ARRAYED_SPEC ]: {
        min: 0,
    },
    [ StandardSpec.MS_PHYSICALIZATION ]: {
        excludeMax: true,
        excludeMin: true,
        integer: true,
        max: as.number(PLAYROOM_TEST_MAX_MS_PHYSICALIZATION),
        min: as.number(PLAYROOM_TEST_MIN_MS_PHYSICALIZATION),
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
