import {
    RangedInputType,
    SpecData,
    StandardSpec,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { differentInitial, initial, onlyPatternParticularInitial, onlyStandardInitial } from './initial'
import { presets } from './presets'
import { PlayroomTestSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecData<PlayroomTestSpec> = {
    attributes,
    initial,
}

const differentSpecData: SpecData<PlayroomTestSpec> = {
    attributes: {
        ...attributes,
        [ StandardSpecProperties.BASE_FREQUENCY ]: {
            ...attributes[ StandardSpecProperties.BASE_FREQUENCY ],
            hideInput: RangedInputType.NUMBER,
        },
    },
    initial: differentInitial,
}

const specDataOnlyStandardInitial: SpecData<StandardSpec> = {
    attributes,
    initial: onlyStandardInitial,
}

const specDataOnlyPatternParticularInitial: SpecData<PlayroomTestSpec> = {
    attributes,
    initial: onlyPatternParticularInitial,
}

const specDataValidation: SpecData<PlayroomTestSpec> = {
    attributes,
    initial,
    validationFunction,
}

const specDataPresets: SpecData<PlayroomTestSpec> = {
    attributes,
    initial: onlyPatternParticularInitial,
    presets,
}

export {
    specData,
    differentSpecData,
    specDataOnlyStandardInitial,
    specDataOnlyPatternParticularInitial,
    specDataValidation,
    specDataPresets,
}
