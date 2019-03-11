import { InputType, RangedInputType, Spec, StandardSpec, StandardSpecs } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import {
    differentInitial,
    initial,
    longDurationInitial,
    onlyPatternParticularInitial,
    onlyStandardInitial,
} from './initial'
import { presets } from './presets'
import { PlayroomTestSpec, PlayroomTestSpecs } from './types'
import { computeValidations } from './validation'

const spec: Spec<PlayroomTestSpecs> = {
    configurations,
    initial,
}

const specDifferent: Spec<PlayroomTestSpecs> = {
    configurations: {
        ...configurations,
        [ StandardSpec.BASE_FREQUENCY ]: {
            ...configurations[ StandardSpec.BASE_FREQUENCY ],
            hideInput: RangedInputType.NUMBER,
        },
        [ PlayroomTestSpec.ARRAYED_SPEC ]: {
            constraint: {
                min: 0,
            },
            formattedName: 'example arrayed control',
            inputType: InputType.RANGED,
            isArrayed: true,
        },
    },
    initial: differentInitial,
}

const specOnlyStandardInitial: Spec<StandardSpecs> = {
    configurations,
    initial: onlyStandardInitial,
}

const specOnlyPatternParticularInitial: Spec<PlayroomTestSpecs> = {
    configurations,
    initial: onlyPatternParticularInitial,
}

const specValidation: Spec<PlayroomTestSpecs> = {
    computeValidations,
    configurations,
    initial,
}

const specPresets: Spec<PlayroomTestSpecs> = {
    configurations,
    initial,
    presets,
}

const specLongDuration: Spec<PlayroomTestSpecs> = {
    configurations,
    initial: longDurationInitial,
    presets,
}

export {
    spec,
    specDifferent,
    specOnlyStandardInitial,
    specOnlyPatternParticularInitial,
    specValidation,
    specPresets,
    specLongDuration,
}
