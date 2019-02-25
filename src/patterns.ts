import { Material, Scale } from '@musical-patterns/compiler'
import { Id, Pattern, Patterns, StandardSpec } from '@musical-patterns/pattern'
import { buildEntities } from './material'
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
    PlayroomTestSpec,
    specData,
    specDataOnlyPatternParticularInitial,
    specDataOnlyStandardInitial,
    specDataPresets,
    specDataValidation,
} from './spec'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: (): Scale[] => [],
}

const playroomTestSpecControls: Pattern<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_SPEC_CONTROLS,
    material,
    metadata: playroomTestSpecControlsMetadata,
    specData,
}

const playroomTestPost: Pattern<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_POST,
    material,
    metadata: playroomTestPostMetadata,
    specData: differentSpecData,
}

const playroomTestTimeControls: Pattern<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_TIME_CONTROLS,
    material,
    metadata: playroomTestTimeControlsMetadata,
    specData: differentSpecData,
}

const playroomTestOnlyPatternParticularSpec: Pattern<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPEC,
    material,
    metadata: playroomTestOnlyPatternParticularSpecMetadata,
    specData: specDataOnlyPatternParticularInitial,
}

const playroomTestOnlyStandardSpec: Pattern<StandardSpec> = {
    id: Id.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    material,
    metadata: playroomTestOnlyStandardSpecMetadata,
    specData: specDataOnlyStandardInitial,
}

const playroomTestValidation: Pattern<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_VALIDATION,
    material,
    metadata: playroomTestValidationMetadata,
    specData: specDataValidation,
}

const playroomTestPresets: Pattern<PlayroomTestSpec> = {
    id: Id.PLAYROOM_TEST_PRESETS,
    material,
    metadata: playroomTestPresetsMetadata,
    specData: specDataPresets,
}

const patterns: Patterns = {
    [ playroomTestSpecControls.id ]: playroomTestSpecControls,
    [ playroomTestPost.id ]: playroomTestPost,
    [ playroomTestTimeControls.id ]: playroomTestTimeControls,
    [ playroomTestOnlyPatternParticularSpec.id ]: playroomTestOnlyPatternParticularSpec,
    [ playroomTestOnlyStandardSpec.id ]: playroomTestOnlyStandardSpec,
    [ playroomTestValidation.id ]: playroomTestValidation,
    [ playroomTestPresets.id ]: playroomTestPresets,
}

const pattern: Pattern<PlayroomTestSpec> = playroomTestSpecControls

export {
    pattern,
    patterns,
}
