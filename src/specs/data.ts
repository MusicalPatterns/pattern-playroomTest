import { PatternSpecData, StandardPatternSpec } from '@musical-patterns/pattern'
import { PlayroomTestPatternSpec } from '../types'
import { specAttributes } from './attributes'
import { differentInitial, initial, onlyPatternSpecificInitial, onlyStandardInitial } from './initial'
import { presetOne, presetTwo } from './presets'
import { validationFunction } from './validation'

const specData: PatternSpecData<PlayroomTestPatternSpec> = {
    specAttributes,
    specs: {
        initial,
    },
}

const differentSpecData: PatternSpecData<PlayroomTestPatternSpec> = {
    specAttributes,
    specs: {
        initial: differentInitial,
    },
}

const specDataOnlyStandardInitial: PatternSpecData<StandardPatternSpec> = {
    specAttributes,
    specs: {
        initial: onlyStandardInitial,
    },
}

const specDataOnlyPatternSpecificInitial: PatternSpecData<PlayroomTestPatternSpec> = {
    specAttributes,
    specs: {
        initial: onlyPatternSpecificInitial,
    },
}

const specDataValidation: PatternSpecData<PlayroomTestPatternSpec> = {
    specAttributes,
    specs: {
        initial,
    },
    validationFunction,
}

const specDataPresets: PatternSpecData<PlayroomTestPatternSpec> = {
    specAttributes,
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
