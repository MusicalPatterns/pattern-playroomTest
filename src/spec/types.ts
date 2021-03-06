import {
    Configurations,
    OptionedConfiguration,
    RangedConfiguration,
    Specs,
    StandardSpec,
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
    OPTIONED_SPEC_TWO_NOT_REQUIRED = 'optionedSpecTwoNotRequired',
    STRINGED_SPEC = 'stringedSpec',
    TOGGLED_SPEC = 'toggledSpec',
}

interface PlayroomTestConfigurations extends Configurations<PlayroomTestSpecs> {
    [ StandardSpec.MS_PHYSICALIZATION ]: RangedConfiguration,
    [ StandardSpec.HZ_PHYSICALIZATION ]: RangedConfiguration,
    [ PlayroomTestSpec.ARRAYED_SPEC ]: RangedConfiguration,
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]: RangedConfiguration,
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedConfiguration,
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO_NOT_REQUIRED ]: OptionedConfiguration,
    [ PlayroomTestSpec.STRINGED_SPEC ]: StringedConfiguration,
    [ PlayroomTestSpec.TOGGLED_SPEC ]: ToggledConfiguration,
}

interface PlayroomTestSpecs extends Specs {
    [ PlayroomTestSpec.ARRAYED_SPEC ]: number[],
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]: number[],
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedSpecOneOption,
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO_NOT_REQUIRED ]: OptionedSpecTwoOption,
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
