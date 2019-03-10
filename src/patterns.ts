import { Material, Scale } from '@musical-patterns/compiler'
import { Id, Pattern, Patterns, StandardSpec } from '@musical-patterns/pattern'
import { materializeEntities } from './material'
import * as metadata from './metadata'
import * as spec from './spec'

const material: Material = {
    materializeEntities,
    materializeScales: (): Scale[] => [],
}

const playroomTestSpecControls: Pattern<spec.PlayroomTestSpec> = {
    data: spec.data,
    id: Id.PLAYROOM_TEST_SPEC_CONTROLS,
    material,
    metadata: metadata.playroomTestSpecControlsMetadata,
}

const playroomTestPost: Pattern<spec.PlayroomTestSpec> = {
    data: spec.differentData,
    id: Id.PLAYROOM_TEST_POST,
    material,
    metadata: metadata.playroomTestPostMetadata,
}

const playroomTestTimeControls: Pattern<spec.PlayroomTestSpec> = {
    data: spec.differentData,
    id: Id.PLAYROOM_TEST_TIME_CONTROLS,
    material,
    metadata: metadata.playroomTestTimeControlsMetadata,
}

const playroomTestOnlyPatternParticularSpec: Pattern<spec.PlayroomTestSpec> = {
    data: spec.dataOnlyPatternParticularInitial,
    id: Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPEC,
    material,
    metadata: metadata.playroomTestOnlyPatternParticularSpecMetadata,
}

const playroomTestOnlyStandardSpec: Pattern<StandardSpec> = {
    data: spec.dataOnlyStandardInitial,
    id: Id.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    material,
    metadata: metadata.playroomTestOnlyStandardSpecMetadata,
}

const playroomTestValidation: Pattern<spec.PlayroomTestSpec> = {
    data: spec.dataValidation,
    id: Id.PLAYROOM_TEST_VALIDATION,
    material,
    metadata: metadata.playroomTestValidationMetadata,
}

const playroomTestPresets: Pattern<spec.PlayroomTestSpec> = {
    data: spec.dataPresets,
    id: Id.PLAYROOM_TEST_PRESETS,
    material,
    metadata: metadata.playroomTestPresetsMetadata,
}

const playroomTestLongDuration: Pattern<spec.PlayroomTestSpec> = {
    data: spec.dataLongDuration,
    id: Id.PLAYROOM_TEST_LONG_DURATION,
    material,
    metadata: metadata.playroomTestLongDurationMetadata,
}

const patterns: Partial<Patterns> = {
    [ playroomTestSpecControls.id ]: playroomTestSpecControls,
    [ playroomTestPost.id ]: playroomTestPost,
    [ playroomTestTimeControls.id ]: playroomTestTimeControls,
    [ playroomTestOnlyPatternParticularSpec.id ]: playroomTestOnlyPatternParticularSpec,
    [ playroomTestOnlyStandardSpec.id ]: playroomTestOnlyStandardSpec,
    [ playroomTestValidation.id ]: playroomTestValidation,
    [ playroomTestPresets.id ]: playroomTestPresets,
    [ playroomTestLongDuration.id ]: playroomTestLongDuration,
}

const pattern: Pattern<spec.PlayroomTestSpec> = playroomTestSpecControls

export {
    pattern,
    patterns,
}
