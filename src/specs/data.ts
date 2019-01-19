import { PatternSpecData, StandardPatternSpec } from '@musical-patterns/pattern'
import { PlayroomTestPatternSpec } from '../types'
import { attributes } from './attributes'
import { differentInitial, initial, onlyPatternSpecificInitial, onlyStandardInitial } from './initial'
import { presetOne, presetTwo } from './presets'
import { validationFunction } from './validation'

const specData: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    initial,
}

const differentSpecData: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    initial: differentInitial,
}

const specDataOnlyStandardInitial: PatternSpecData<StandardPatternSpec> = {
    attributes,
    initial: onlyStandardInitial,
}

const specDataOnlyPatternSpecificInitial: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    initial: onlyPatternSpecificInitial,
}

const specDataValidation: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    initial,
    validationFunction,
}

const specDataPresets: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    initial: onlyPatternSpecificInitial,
    presets: {
        presetOne,
        presetTwo,
    },
}

export {
    specData,
    differentSpecData,
    specDataOnlyStandardInitial,
    specDataOnlyPatternSpecificInitial,
    specDataValidation,
    specDataPresets,
}
