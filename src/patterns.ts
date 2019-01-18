import { PatternMaterial, Scale } from '@musical-patterns/compiler'
import { StandardPatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { buildEntities } from './materials'
import {
    playroomTestOnlyPatternSpecificSpecMetadata,
    playroomTestOnlyStandardSpecMetadata,
    playroomTestPatternSpecControlsMetadata,
    playroomTestPostMetadata,
    playroomTestPresetsMetadata,
    playroomTestTimeControlsMetadata,
    playroomTestValidationMetadata,
} from './metadata'
import {
    differentSpecData,
    specData,
    specDataOnlyPatternSpecificInitial,
    specDataOnlyStandardInitial,
    specDataPresets,
    specDataValidation,
} from './specs'
import { PlayroomTestPatternSpec } from './types'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: (): Scale[] => [],
}

const playroomTestPatternSpecControls: Pattern<PlayroomTestPatternSpec> = {
    material,
    metadata: playroomTestPatternSpecControlsMetadata,
    patternId: PatternId.PLAYROOM_TEST_PATTERN_SPEC_CONTROLS,
    specData,
}

const playroomTestPost: Pattern<PlayroomTestPatternSpec> = {
    material,
    metadata: playroomTestPostMetadata,
    patternId: PatternId.PLAYROOM_TEST_POST,
    specData: differentSpecData,
}

const playroomTestTimeControls: Pattern<PlayroomTestPatternSpec> = {
    material,
    metadata: playroomTestTimeControlsMetadata,
    patternId: PatternId.PLAYROOM_TEST_TIME_CONTROLS,
    specData: differentSpecData,
}

const playroomTestOnlyPatternSpecificSpec: Pattern<PlayroomTestPatternSpec> = {
    material,
    metadata: playroomTestOnlyPatternSpecificSpecMetadata,
    patternId: PatternId.PLAYROOM_TEST_ONLY_PATTERN_SPECIFIC_SPEC,
    specData: specDataOnlyPatternSpecificInitial,
}

const playroomTestOnlyStandardSpec: Pattern<StandardPatternSpec> = {
    material,
    metadata: playroomTestOnlyStandardSpecMetadata,
    patternId: PatternId.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    specData: specDataOnlyStandardInitial,
}

const playroomTestValidation: Pattern<PlayroomTestPatternSpec> = {
    material,
    metadata: playroomTestValidationMetadata,
    patternId: PatternId.PLAYROOM_TEST_VALIDATION,
    specData: specDataValidation,
}

const playroomTestPresets: Pattern<PlayroomTestPatternSpec> = {
    material,
    metadata: playroomTestPresetsMetadata,
    patternId: PatternId.PLAYROOM_TEST_PRESETS,
    specData: specDataPresets,
}

const patterns: Patterns = buildPatterns({
    [ playroomTestPatternSpecControls.patternId ]: playroomTestPatternSpecControls,
    [ playroomTestPost.patternId ]: playroomTestPost,
    [ playroomTestTimeControls.patternId ]: playroomTestTimeControls,
    [ playroomTestOnlyPatternSpecificSpec.patternId ]: playroomTestOnlyPatternSpecificSpec,
    [ playroomTestOnlyStandardSpec.patternId ]: playroomTestOnlyStandardSpec,
    [ playroomTestValidation.patternId ]: playroomTestValidation,
    [ playroomTestPresets.patternId ]: playroomTestPresets,
})

const pattern: Pattern<PlayroomTestPatternSpec> = playroomTestPatternSpecControls

export {
    pattern,
    patterns,
}
