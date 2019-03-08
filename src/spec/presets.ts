import { Preset } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import {
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
} from './constants'
import { initial } from './initial'
import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from './types'

const presetSpec: PlayroomTestSpec = {
    ...initial,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
}

const otherPresetSpec: PlayroomTestSpec = {
    arrayedProperty: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY,
    arrayedPropertyWithInitialFieldValue: PLAYROOM_TEST_INITIAL_ARRAYED_PROPERTY_WITH_INITIAL_ELEMENT_VALUE,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    stringedProperty: 'ABD',
    toggledProperty: true,
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
        optionedPropertyOne: OptionedPropertyOneOptions.OPTION_THREE,
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
