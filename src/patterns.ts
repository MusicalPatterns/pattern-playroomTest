import { PatternMaterial, Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import { buildPatterns, PatternFor, PatternId, Patterns } from '@musical-patterns/registry'
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

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: (): Scale[] => [],
}

const playroomTestSpecControls: PatternFor<PlayroomTestSpec> = {
    material,
    metadata: playroomTestSpecControlsMetadata,
    patternId: PatternId.PLAYROOM_TEST_SPEC_CONTROLS,
    specData,
}

const playroomTestPost: PatternFor<PlayroomTestSpec> = {
    material,
    metadata: playroomTestPostMetadata,
    patternId: PatternId.PLAYROOM_TEST_POST,
    specData: differentSpecData,
}

const playroomTestTimeControls: PatternFor<PlayroomTestSpec> = {
    material,
    metadata: playroomTestTimeControlsMetadata,
    patternId: PatternId.PLAYROOM_TEST_TIME_CONTROLS,
    specData: differentSpecData,
}

const playroomTestOnlyPatternParticularSpec: PatternFor<PlayroomTestSpec> = {
    material,
    metadata: playroomTestOnlyPatternParticularSpecMetadata,
    patternId: PatternId.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPEC,
    specData: specDataOnlyPatternParticularInitial,
}

const playroomTestOnlyStandardSpec: PatternFor<StandardSpec> = {
    material,
    metadata: playroomTestOnlyStandardSpecMetadata,
    patternId: PatternId.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    specData: specDataOnlyStandardInitial,
}

const playroomTestValidation: PatternFor<PlayroomTestSpec> = {
    material,
    metadata: playroomTestValidationMetadata,
    patternId: PatternId.PLAYROOM_TEST_VALIDATION,
    specData: specDataValidation,
}

const playroomTestPresets: PatternFor<PlayroomTestSpec> = {
    material,
    metadata: playroomTestPresetsMetadata,
    patternId: PatternId.PLAYROOM_TEST_PRESETS,
    specData: specDataPresets,
}

const patterns: Patterns = buildPatterns({
    [ playroomTestSpecControls.patternId ]: playroomTestSpecControls,
    [ playroomTestPost.patternId ]: playroomTestPost,
    [ playroomTestTimeControls.patternId ]: playroomTestTimeControls,
    [ playroomTestOnlyPatternParticularSpec.patternId ]: playroomTestOnlyPatternParticularSpec,
    [ playroomTestOnlyStandardSpec.patternId ]: playroomTestOnlyStandardSpec,
    [ playroomTestValidation.patternId ]: playroomTestValidation,
    [ playroomTestPresets.patternId ]: playroomTestPresets,
})

const pattern: PatternFor<PlayroomTestSpec> = playroomTestSpecControls

export {
    pattern,
    patterns,
}
