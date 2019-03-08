import { Data, RangedInputType, StandardProperties, StandardSpec } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import {
    differentInitial,
    initial,
    longDurationInitial,
    onlyPatternParticularInitial,
    onlyStandardInitial,
} from './initial'
import { presets } from './presets'
import { PlayroomTestSpec } from './types'
import { validationFunction } from './validation'

const data: Data<PlayroomTestSpec> = {
    attributes,
    initial,
}

const differentData: Data<PlayroomTestSpec> = {
    attributes: {
        ...attributes,
        [ StandardProperties.BASE_FREQUENCY ]: {
            ...attributes[ StandardProperties.BASE_FREQUENCY ],
            hideInput: RangedInputType.NUMBER,
        },
    },
    initial: differentInitial,
}

const dataOnlyStandardInitial: Data<StandardSpec> = {
    attributes,
    initial: onlyStandardInitial,
}

const dataOnlyPatternParticularInitial: Data<PlayroomTestSpec> = {
    attributes,
    initial: onlyPatternParticularInitial,
}

const dataValidation: Data<PlayroomTestSpec> = {
    attributes,
    initial,
    validationFunction,
}

const dataPresets: Data<PlayroomTestSpec> = {
    attributes,
    initial,
    presets,
}

const dataLongDuration: Data<PlayroomTestSpec> = {
    attributes,
    initial: longDurationInitial,
    presets,
}

export {
    data,
    differentData,
    dataOnlyStandardInitial,
    dataOnlyPatternParticularInitial,
    dataValidation,
    dataPresets,
    dataLongDuration,
}
