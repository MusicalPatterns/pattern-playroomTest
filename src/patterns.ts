import { Material, Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import { buildPatterns, Id, PatternFor, Patterns } from '@musical-patterns/registry'
import { buildEntities } from './materials'
import {
    playroomTestOnlyPatternParticularSpecMetadata,
    playroomTestOnlyStandardSpecMetadata,
    playroomTestPostMetadata,
    playroomTestPresetsMetadata,
    playroomTestSpecControlsMetadata,
    playroomTestTimeControlsMetadata,
    playroomTestValidationMetadata,
} from './metadata'
import {
    differentSpecData,
    specData,
    specDataOnlyPatternParticularInitial,
    specDataOnlyStandardInitial,
    specDataPresets,
    specDataValidation,
} from './specs'
import { PlayroomTestSpec } from './types'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: (): Scale[] => [],
}

const playroomTestSpecControls: PatternFor<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_SPEC_CONTROLS,
    material,
    metadata: playroomTestSpecControlsMetadata,
    specData,
}

const playroomTestPost: PatternFor<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_POST,
    material,
    metadata: playroomTestPostMetadata,
    specData: differentSpecData,
}

const playroomTestTimeControls: PatternFor<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_TIME_CONTROLS,
    material,
    metadata: playroomTestTimeControlsMetadata,
    specData: differentSpecData,
}

const playroomTestOnlyPatternParticularSpec: PatternFor<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPEC,
    material,
    metadata: playroomTestOnlyPatternParticularSpecMetadata,
    specData: specDataOnlyPatternParticularInitial,
}

const playroomTestOnlyStandardSpec: PatternFor<StandardSpec> = {
    id: Id.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    material,
    metadata: playroomTestOnlyStandardSpecMetadata,
    specData: specDataOnlyStandardInitial,
}

const playroomTestValidation: PatternFor<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_VALIDATION,
    material,
    metadata: playroomTestValidationMetadata,
    specData: specDataValidation,
}

const playroomTestPresets: PatternFor<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_PRESETS,
    material,
    metadata: playroomTestPresetsMetadata,
    specData: specDataPresets,
}

const patterns: Patterns = buildPatterns({
    [ playroomTestSpecControls.id ]: playroomTestSpecControls,
    [ playroomTestPost.id ]: playroomTestPost,
    [ playroomTestTimeControls.id ]: playroomTestTimeControls,
    [ playroomTestOnlyPatternParticularSpec.id ]: playroomTestOnlyPatternParticularSpec,
    [ playroomTestOnlyStandardSpec.id ]: playroomTestOnlyStandardSpec,
    [ playroomTestValidation.id ]: playroomTestValidation,
    [ playroomTestPresets.id ]: playroomTestPresets,
})

const pattern: PatternFor<PlayroomTestSpec> = playroomTestSpecControls

export {
    pattern,
    patterns,
}
