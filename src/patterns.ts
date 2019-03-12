import { Id, Pattern, Patterns, StandardSpecs } from '@musical-patterns/pattern'
import { material } from './material'
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

const playroomTestOnlyStandardSpecs: Pattern<StandardSpecs> = {
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

const patterns: Partial<Patterns> = {
    [ playroomTestSpecControls.id ]: playroomTestSpecControls,
    [ playroomTestPost.id ]: playroomTestPost,
    [ playroomTestTimeControls.id ]: playroomTestTimeControls,
    [ playroomTestOnlyPatternParticularSpecs.id ]: playroomTestOnlyPatternParticularSpecs,
    [ playroomTestOnlyStandardSpecs.id ]: playroomTestOnlyStandardSpecs,
    [ playroomTestValidation.id ]: playroomTestValidation,
    [ playroomTestPresets.id ]: playroomTestPresets,
    [ playroomTestLongDuration.id ]: playroomTestLongDuration,
}

const pattern: Pattern<specs.PlayroomTestSpecs> = playroomTestSpecControls

export {
    pattern,
    patterns,
}
