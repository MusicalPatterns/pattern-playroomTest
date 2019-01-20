import { PatternSpecDataFor, StandardPatternSpec } from '@musical-patterns/pattern'
import { PlayroomTestPatternSpec } from '../types'
import { attributes } from './attributes'
import { differentInitial, initial, onlyPatternSpecificInitial, onlyStandardInitial } from './initial'
import { presetOne, presetTwo } from './presets'
import { validationFunction } from './validation'

const specData: PatternSpecDataFor<PlayroomTestPatternSpec> = {
    attributes,
    initial,
}

const differentSpecData: PatternSpecDataFor<PlayroomTestPatternSpec> = {
    attributes,
    initial: differentInitial,
}

const specDataOnlyStandardInitial: PatternSpecDataFor<StandardPatternSpec> = {
    attributes,
    initial: onlyStandardInitial,
}

const specDataOnlyPatternSpecificInitial: PatternSpecDataFor<PlayroomTestPatternSpec> = {
    attributes,
    initial: onlyPatternSpecificInitial,
}

const specDataValidation: PatternSpecDataFor<PlayroomTestPatternSpec> = {
    attributes,
    initial,
    validationFunction,
}

const specDataPresets: PatternSpecDataFor<PlayroomTestPatternSpec> = {
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
