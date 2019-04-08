import {
    Configurations,
    OptionedConfiguration,
    RangedConfiguration,
    StandardSpec,
    StandardSpecs,
    StringedConfiguration,
    ToggledConfiguration,
} from '@musical-patterns/spec'

enum OptionedSpecOneOption {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
    OPTION_THREE = 'OPTION_THREE',
}

enum OptionedSpecTwoOption {
    OPTION_THE_FIRST = 'OPTION_THE_FIRST',
    OPTION_THE_SECOND = 'OPTION_THE_SECOND',
}

enum PlayroomTestSpec {
    ARRAYED_SPEC = 'arrayedSpec',
    ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE = 'arrayedSpecWithInitialFieldValue',
    OPTIONED_SPEC_ONE = 'optionedSpecOne',
    OPTIONED_SPEC_TWO = 'optionedSpecTwo',
    STRINGED_SPEC = 'stringedSpec',
    TOGGLED_SPEC = 'toggledSpec',
}

interface PlayroomTestConfigurations extends Configurations<PlayroomTestSpecs> {
    [ StandardSpec.BASE_DURATION ]: RangedConfiguration,
    [ StandardSpec.BASE_FREQUENCY ]: RangedConfiguration,
    [ PlayroomTestSpec.ARRAYED_SPEC ]: RangedConfiguration,
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]: RangedConfiguration,
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedConfiguration,
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO ]: OptionedConfiguration,
    [ PlayroomTestSpec.STRINGED_SPEC ]: StringedConfiguration,
    [ PlayroomTestSpec.TOGGLED_SPEC ]: ToggledConfiguration,
}

interface PlayroomTestSpecs extends StandardSpecs {
    [ PlayroomTestSpec.ARRAYED_SPEC ]: number[],
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]: number[],
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedSpecOneOption,
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO ]: OptionedSpecTwoOption,
    [ PlayroomTestSpec.STRINGED_SPEC ]: string,
    [ PlayroomTestSpec.TOGGLED_SPEC ]: boolean,
}

export {
    PlayroomTestSpecs,
    PlayroomTestConfigurations,
    OptionedSpecOneOption,
    OptionedSpecTwoOption,
    PlayroomTestSpec,
}
