import { PatternSpecData, StandardPatternSpec } from '@musical-patterns/pattern'
import { PlayroomTestPatternSpec } from '../types'
import { attributes } from './attributes'
import { differentInitial, initial, onlyPatternSpecificInitial, onlyStandardInitial } from './initial'
import { presetOne, presetTwo } from './presets'
import { validationFunction } from './validation'

const specData: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    specs: {
        initial,
    },
}

const differentSpecData: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    specs: {
        initial: differentInitial,
    },
}

const specDataOnlyStandardInitial: PatternSpecData<StandardPatternSpec> = {
    attributes,
    specs: {
        initial: onlyStandardInitial,
    },
}

const specDataOnlyPatternSpecificInitial: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    specs: {
        initial: onlyPatternSpecificInitial,
    },
}

const specDataValidation: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    specs: {
        initial,
    },
    validationFunction,
}

const specDataPresets: PatternSpecData<PlayroomTestPatternSpec> = {
    attributes,
    specs: {
        initial,
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
