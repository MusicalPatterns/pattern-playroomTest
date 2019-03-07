import { Material, Scale } from '@musical-patterns/compiler'
import { Id, Pattern, Patterns, StandardSpec } from '@musical-patterns/pattern'
import { buildEntities } from './material'
import * as metadata from './metadata'
import * as spec from './spec'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: (): Scale[] => [],
}

const playroomTestSpecControls: Pattern<spec.PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_SPEC_CONTROLS,
    material,
    metadata: metadata.playroomTestSpecControlsMetadata,
    specData: spec.specData,
}

const playroomTestPost: Pattern<spec.PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_POST,
    material,
    metadata: metadata.playroomTestPostMetadata,
    specData: spec.differentSpecData,
}

const playroomTestTimeControls: Pattern<spec.PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_TIME_CONTROLS,
    material,
    metadata: metadata.playroomTestTimeControlsMetadata,
    specData: spec.differentSpecData,
}

const playroomTestOnlyPatternParticularSpec: Pattern<spec.PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPEC,
    material,
    metadata: metadata.playroomTestOnlyPatternParticularSpecMetadata,
    specData: spec.specDataOnlyPatternParticularInitial,
}

const playroomTestOnlyStandardSpec: Pattern<StandardSpec> = {
    id: Id.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    material,
    metadata: metadata.playroomTestOnlyStandardSpecMetadata,
    specData: spec.specDataOnlyStandardInitial,
}

const playroomTestValidation: Pattern<spec.PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_VALIDATION,
    material,
    metadata: metadata.playroomTestValidationMetadata,
    specData: spec.specDataValidation,
}

const playroomTestPresets: Pattern<spec.PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_PRESETS,
    material,
    metadata: metadata.playroomTestPresetsMetadata,
    specData: spec.specDataPresets,
}

const playroomTestLongDuration: Pattern<spec.PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_LONG_DURATION,
    material,
    metadata: metadata.playroomTestLongDurationMetadata,
    specData: spec.specDataLongDuration,
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
