import { InputType, RangedInputType, standardConfigurations, StandardSpec } from '@musical-patterns/spec'
import { optionedConstraints, rangedConstraints, stringedConstraints } from './constraints'
import { PlayroomTestConfigurations, PlayroomTestSpec } from './types'

const configurations: PlayroomTestConfigurations = {
    ...standardConfigurations,
    [ PlayroomTestSpec.ARRAYED_SPEC ]: {
        arrayedConstraint: {
            maxLength: 7,
            minLength: 4,
        },
        constraint: rangedConstraints[ PlayroomTestSpec.ARRAYED_SPEC ],
        formattedName: 'example arrayed spec',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        isArrayed: true,
    },
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]: {
        arrayedNewFieldInitialValue: 0,
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
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO ]: {
        constraint: optionedConstraints[ PlayroomTestSpec.OPTIONED_SPEC_TWO ],
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
    [ StandardSpec.BASIS_DURATION ]: {
        ...standardConfigurations[ StandardSpec.BASIS_DURATION ],
        constraint: rangedConstraints[ StandardSpec.BASIS_DURATION ],
        formattedName: 'example ranged control one',
        order: 2,
    },
    [ StandardSpec.BASIS_FREQUENCY ]: {
        ...standardConfigurations[ StandardSpec.BASIS_FREQUENCY ],
        description: 'I need to describe something to you and it is super cereal you guys',
        formattedName: 'example ranged control two',
        hideInput: RangedInputType.RANGE,
        order: 3,
    },
}

const differentConfigurations: PlayroomTestConfigurations = {
    ...standardConfigurations,
    ...configurations,
    [ StandardSpec.BASIS_FREQUENCY ]: {
        ...standardConfigurations[ StandardSpec.BASIS_FREQUENCY ],
        hideInput: RangedInputType.NUMBER,
    },
    [ PlayroomTestSpec.ARRAYED_SPEC ]: {
        constraint: {
            min: 0,
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
