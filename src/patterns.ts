import { PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import {
    PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
} from './constants'
import { buildEntities } from './materials'
import { post } from './metadata'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: post,
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

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
    spec,
}
