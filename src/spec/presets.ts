import { Preset } from '@musical-patterns/pattern'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
} from './constants'
import { initials } from './initials'
import { OptionedSpecOneOption, OptionedSpecTwoOption, PlayroomTestSpec, PlayroomTestSpecs } from './types'

const presetSpecs: PlayroomTestSpecs = {
    ...initials,
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedSpecOneOption.OPTION_ONE,
}

const otherPresetSpecs: PlayroomTestSpecs = {
    [ PlayroomTestSpec.ARRAYED_SPEC ]: PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]:
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedSpecOneOption.OPTION_TWO,
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO ]: OptionedSpecTwoOption.OPTION_THE_SECOND,
    [ PlayroomTestSpec.STRINGED_SPEC ]: 'ABD',
    [ PlayroomTestSpec.TOGGLED_SPEC ]: true,
}

const presetOne: Preset<PlayroomTestSpecs> = {
    formattedName: 'Preset Uno',
    order: 4,
    specs: presetSpecs,
}

const presetTwo: Preset<PlayroomTestSpecs> = {
    formattedName: 'Preset Dos',
    order: 7,
    specs: otherPresetSpecs,
}

const presetThree: Preset<PlayroomTestSpecs> = {
    description: 'this preset exists to QA preset presentation',
    specs: {
        ...presetSpecs,
        [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedSpecOneOption.OPTION_THREE,
    },
}

const presets: ObjectOf<Preset<PlayroomTestSpecs>> = {
    presetOne,
    presetThree,
    presetTwo,
}

export {
    presets,
}
