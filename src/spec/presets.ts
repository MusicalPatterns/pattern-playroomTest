import { PresetFor } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from '../types'
import { INITIAL_ARRAY_OF_RANGED_PROPERTY } from './constants'

const presetSpec: PlayroomTestSpec = {
    arrayOfRangedProperty: INITIAL_ARRAY_OF_RANGED_PROPERTY,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    toggledProperty: false,
}

const otherPresetSpec: PlayroomTestSpec = {
    arrayOfRangedProperty: INITIAL_ARRAY_OF_RANGED_PROPERTY,
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
