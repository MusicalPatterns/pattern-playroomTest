import { Preset } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import {
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
} from './constants'
import { initial } from './initial'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestProperty, PlayroomTestSpec } from './types'

const presetSpec: PlayroomTestSpec = {
    ...initial,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: OptionedPropertyOneOptions.OPTION_ONE,
}

const otherPresetSpec: PlayroomTestSpec = {
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    [ PlayroomTestProperty.ARRAYED_PROPERTY_WITH_INITIAL_FIELD_VALUE ]:
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: OptionedPropertyOneOptions.OPTION_TWO,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    [ PlayroomTestProperty.STRINGED_PROPERTY ]: 'ABD',
    [ PlayroomTestProperty.TOGGLED_PROPERTY ]: true,
}

const presetOne: Preset<PlayroomTestSpec> = {
    formattedName: 'Preset Uno',
    order: 4,
    spec: presetSpec,
}

const presetTwo: Preset<PlayroomTestSpec> = {
    formattedName: 'Preset Dos',
    order: 7,
    spec: otherPresetSpec,
}

const presetThree: Preset<PlayroomTestSpec> = {
    description: 'this preset exists to QA preset presentation',
    spec: {
        ...presetSpec,
        [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: OptionedPropertyOneOptions.OPTION_THREE,
    },
}

const presets: DictionaryOf<Preset<PlayroomTestSpec>> = {
    presetOne,
    presetThree,
    presetTwo,
}

export {
    presets,
}
