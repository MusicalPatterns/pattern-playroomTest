import { InputType, RangedInputType, standardConfigurations, StandardSpec } from '@musical-patterns/spec'
import { optionedConstraints, rangedConstraints, stringedConstraints } from './constraints'
import { PlayroomTestConfigurations, PlayroomTestSpec } from './types'

const configurations: PlayroomTestConfigurations = {
    ...standardConfigurations,
    [ PlayroomTestSpec.ARRAYED_SPEC ]: {
        arrayedConstraint: {
            maxLength: 7,
            minLength: 4,
            required: true,
        },
        constraint: rangedConstraints[ PlayroomTestSpec.ARRAYED_SPEC ],
        formattedName: 'example arrayed spec',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        isArrayed: true,
    },
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]: {
        arrayedConstraint: {
            required: true,
        },
        arrayedNewFieldInitialValue: 0,
        constraint: {
            required: true,
        },
        formattedName: 'example arrayed control, with an initial value for its elements',
        hideInput: RangedInputType.NUMBER,
        inputType: InputType.RANGED,
        isArrayed: true,
    },
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: {
        constraint: optionedConstraints[ PlayroomTestSpec.OPTIONED_SPEC_ONE ],
        formattedName: 'example optioned control one',
        inputType: InputType.OPTIONED,
    },
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO_NOT_REQUIRED ]: {
        constraint: optionedConstraints[ PlayroomTestSpec.OPTIONED_SPEC_TWO_NOT_REQUIRED ],
        formattedName: 'example optioned control two',
        inputType: InputType.OPTIONED,
    },
    [ PlayroomTestSpec.STRINGED_SPEC ]: {
        constraint: stringedConstraints[ PlayroomTestSpec.STRINGED_SPEC ],
        formattedName: `example control that's a string`,
        inputType: InputType.STRINGED,
        order: 6,
    },
    [ PlayroomTestSpec.TOGGLED_SPEC ]: {
        formattedName: 'example on/off control',
        inputType: InputType.TOGGLED,
        order: 1,
    },
    [ StandardSpec.MS_PHYSICALIZATION ]: {
        ...standardConfigurations[ StandardSpec.MS_PHYSICALIZATION ],
        constraint: rangedConstraints[ StandardSpec.MS_PHYSICALIZATION ],
        formattedName: 'example ranged control one',
        order: 2,
    },
    [ StandardSpec.HZ_PHYSICALIZATION ]: {
        ...standardConfigurations[ StandardSpec.HZ_PHYSICALIZATION ],
        description: 'I need to describe something to you and it is super cereal you guys',
        formattedName: 'example ranged control two',
        hideInput: RangedInputType.RANGE,
        order: 3,
    },
}

const differentConfigurations: PlayroomTestConfigurations = {
    ...standardConfigurations,
    ...configurations,
    [ StandardSpec.HZ_PHYSICALIZATION ]: {
        ...standardConfigurations[ StandardSpec.HZ_PHYSICALIZATION ],
        hideInput: RangedInputType.NUMBER,
    },
    [ PlayroomTestSpec.ARRAYED_SPEC ]: {
        arrayedConstraint: {
            required: true,
        },
        constraint: {
            min: 0,
            required: true,
        },
        formattedName: 'example arrayed control hiding neither input',
        inputType: InputType.RANGED,
        isArrayed: true,
    },
}

export {
    configurations,
    differentConfigurations,
}
