// tslint:disable max-file-line-count

import { Id } from '@musical-patterns/id'
import { Pattern, Patterns } from '@musical-patterns/pattern'
import { finiteMaterial, material, repetendMaterial } from './material'
import * as metadata from './metadata'
import * as specs from './spec'

const playroomTestSpecControls: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_SPEC_CONTROLS,
    material,
    metadata: metadata.playroomTestSpecControlsMetadata,
    spec: specs.spec,
}

const playroomTestPost: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_POST,
    material,
    metadata: metadata.playroomTestPostMetadata,
    spec: specs.specDifferent,
}

const playroomTestTimeControls: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_TIME_CONTROLS,
    material,
    metadata: metadata.playroomTestTimeControlsMetadata,
    spec: specs.specDifferent,
}

const playroomTestOnlyPatternParticularSpecs: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPECS,
    material,
    metadata: metadata.playroomTestOnlyPatternParticularSpecsMetadata,
    spec: specs.specOnlyPatternParticularInitial,
}

const playroomTestOnlyStandardSpecs: Pattern = {
    id: Id.PLAYROOM_TEST_ONLY_STANDARD_SPECS,
    material,
    metadata: metadata.playroomTestOnlyStandardSpecsMetadata,
    spec: specs.specOnlyStandardInitial,
}

const playroomTestValidation: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_VALIDATION,
    material,
    metadata: metadata.playroomTestValidationMetadata,
    spec: specs.specValidation,
}

const playroomTestPresets: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_PRESETS,
    material,
    metadata: metadata.playroomTestPresetsMetadata,
    spec: specs.specPresets,
}

const playroomTestLongDuration: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_LONG_DURATION,
    material,
    metadata: metadata.playroomTestLongDurationMetadata,
    spec: specs.specLongDuration,
}

const playroomTestFinite: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_FINITE,
    material: finiteMaterial,
    metadata: metadata.playroomTestFiniteMetadata,
    spec: specs.spec,
}

const playroomTestRepetend: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_REPETEND,
    material: repetendMaterial,
    metadata: metadata.playroomTestRepetendMetadata,
    spec: specs.spec,
}

const playroomTestRestart: Pattern<specs.PlayroomTestSpecs> = {
    id: Id.PLAYROOM_TEST_RESTART,
    material,
    metadata: metadata.playroomTestRestartMetadata,
    spec: specs.specRestart,
}

const patterns: Partial<Patterns> = {
    [ playroomTestSpecControls.id ]: playroomTestSpecControls,
    [ playroomTestPost.id ]: playroomTestPost,
    [ playroomTestTimeControls.id ]: playroomTestTimeControls,
    [ playroomTestOnlyPatternParticularSpecs.id ]: playroomTestOnlyPatternParticularSpecs,
    [ playroomTestOnlyStandardSpecs.id ]: playroomTestOnlyStandardSpecs,
    [ playroomTestValidation.id ]: playroomTestValidation,
    [ playroomTestPresets.id ]: playroomTestPresets,
    [ playroomTestLongDuration.id ]: playroomTestLongDuration,
    [ playroomTestFinite.id ]: playroomTestFinite,
    [ playroomTestRepetend.id ]: playroomTestRepetend,
    [ playroomTestRestart.id ]: playroomTestRestart,
}

const pattern: Pattern<specs.PlayroomTestSpecs> = playroomTestSpecControls

export {
    pattern,
    patterns,
}
