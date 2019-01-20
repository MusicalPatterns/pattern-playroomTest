import { SpecDataFor, StandardSpec } from '@musical-patterns/pattern'
import { PlayroomTestSpec } from '../types'
import { attributes } from './attributes'
import { differentInitial, initial, onlyPatternParticularInitial, onlyStandardInitial } from './initial'
import { presetOne, presetTwo } from './presets'
import { validationFunction } from './validation'

const specData: SpecDataFor<PlayroomTestSpec> = {
    attributes,
    initial,
}

const differentSpecData: SpecDataFor<PlayroomTestSpec> = {
    attributes,
    initial: differentInitial,
}

const specDataOnlyStandardInitial: SpecDataFor<StandardSpec> = {
    attributes,
    initial: onlyStandardInitial,
}

const specDataOnlyPatternParticularInitial: SpecDataFor<PlayroomTestSpec> = {
    attributes,
    initial: onlyPatternParticularInitial,
}

const specDataValidation: SpecDataFor<PlayroomTestSpec> = {
    attributes,
    initial,
    validationFunction,
}

const specDataPresets: SpecDataFor<PlayroomTestSpec> = {
    attributes,
    initial: onlyPatternParticularInitial,
    presets: {
        presetOne,
        presetTwo,
    },
}

export {
    specData,
    differentSpecData,
    specDataOnlyStandardInitial,
    specDataOnlyPatternParticularInitial,
    specDataValidation,
    specDataPresets,
}
