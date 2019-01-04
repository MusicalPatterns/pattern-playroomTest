import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { Pattern, PatternId } from '@musical-patterns/registry'
import { PLAYROOM_TEST_PATTERN_DURATION_SCALAR, PLAYROOM_TEST_PATTERN_PITCH_SCALAR } from './constants'

const material: PatternMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: 'pattern for testing playroom interface',
    formattedName: 'Playroom Test',
    musicalIdeaIllustrated: 'testing 1, 2, 3...',
}

const spec: PatternSpec = {
    patternDurationScalar: PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    patternPitchScalar: PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.PLAYROOM_TEST,
    spec,
}

export {
    pattern,
    spec,
}
