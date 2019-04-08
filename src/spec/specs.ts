import { Spec, StandardSpecs } from '@musical-patterns/spec'
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
    initialSpecs: initials,
}

const specDifferent: Spec<PlayroomTestSpecs> = {
    configurations: differentConfigurations,
    initialSpecs: differentInitial,
}

const specOnlyStandardInitial: Spec<StandardSpecs> = {
    configurations,
    initialSpecs: onlyStandardInitial,
}

const specOnlyPatternParticularInitial: Spec<PlayroomTestSpecs> = {
    configurations,
    initialSpecs: onlyPatternParticularInitial,
}

const specValidation: Spec<PlayroomTestSpecs> = {
    computeValidations,
    configurations,
    initialSpecs: initials,
}

const specPresets: Spec<PlayroomTestSpecs> = {
    configurations,
    initialSpecs: initials,
    presets,
}

const specLongDuration: Spec<PlayroomTestSpecs> = {
    configurations,
    initialSpecs: longDurationInitial,
    presets,
}

const specRestart: Spec<PlayroomTestSpecs> = {
    configurations,
    initialSpecs: longDurationInitial,
    presets,
    restartOnModify: true,
}

export {
    spec,
    specDifferent,
    specOnlyStandardInitial,
    specOnlyPatternParticularInitial,
    specValidation,
    specPresets,
    specLongDuration,
    specRestart,
}
