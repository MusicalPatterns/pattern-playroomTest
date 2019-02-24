import { PresetFor } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY } from './constants'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from './types'

const presetSpec: PlayroomTestSpec = {
    arrayedProperty: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    toggledProperty: false,
}

const otherPresetSpec: PlayroomTestSpec = {
    arrayedProperty: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    toggledProperty: true,
}

const presetOne: PresetFor<PlayroomTestSpec> = {
    formattedName: 'Preset Uno',
    order: 4,
    spec: presetSpec,
}

const presetTwo: PresetFor<PlayroomTestSpec> = {
    formattedName: 'Preset Dos',
    order: 7,
    spec: otherPresetSpec,
}

const presetThree: PresetFor<PlayroomTestSpec> = {
    description: 'this preset exists to QA preset presentation',
    spec: {
        ...presetSpec,
        optionedPropertyOne: OptionedPropertyOneOptions.OPTION_THREE,
    },
}

const presets: DictionaryOf<PresetFor<PlayroomTestSpec>> = {
    presetOne,
    presetThree,
    presetTwo,
}

export {
    presets,
}
