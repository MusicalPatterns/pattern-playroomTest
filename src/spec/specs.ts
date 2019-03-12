import { Spec, StandardSpecs } from '@musical-patterns/pattern'
import { configurations, differentConfigurations } from './configurations'
import {
    differentInitial,
    initials,
    longDurationInitial,
    onlyPatternParticularInitial,
    onlyStandardInitial,
} from './initials'
import { presets } from './presets'
import { PlayroomTestSpecs } from './types'
import { computeValidations } from './validations'

const spec: Spec<PlayroomTestSpecs> = {
    configurations,
    initial: initials,
}

const specDifferent: Spec<PlayroomTestSpecs> = {
    configurations: differentConfigurations,
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
    initial: initials,
}

const specPresets: Spec<PlayroomTestSpecs> = {
    configurations,
    initial: initials,
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
