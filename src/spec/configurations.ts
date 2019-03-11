import { InputType, RangedInputType, standardConfigurations, StandardSpec } from '@musical-patterns/pattern'
import { optionedConstraints, rangedConstraints, stringedConstraints } from './constraints'
import { PlayroomTestConfigurations, PlayroomTestSpec } from './types'

const configurations: PlayroomTestConfigurations = {
    ...standardConfigurations,
    [ PlayroomTestSpec.ARRAYED_SPEC ]: {
        constraint: rangedConstraints[ PlayroomTestSpec.ARRAYED_SPEC ],
        formattedName: 'example arrayed spec',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        isArrayed: true,
    },
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]: {
        arrayedNewFieldInitialValue: 6,
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
    [ StandardSpec.BASE_DURATION ]: {
        ...standardConfigurations[ StandardSpec.BASE_DURATION ],
        constraint: rangedConstraints[ StandardSpec.BASE_DURATION ],
        formattedName: 'example ranged control one',
        order: 2,
    },
    [ StandardSpec.BASE_FREQUENCY ]: {
        ...standardConfigurations[ StandardSpec.BASE_DURATION ],
        description: 'I need to describe something to you and it is super cereal you guys',
        formattedName: 'example ranged control two',
        hideInput: RangedInputType.RANGE,
        order: 3,
    },
}

export {
    configurations,
}
