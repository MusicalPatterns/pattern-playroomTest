import { PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpecPropertyType, standardPatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { from } from '@musical-patterns/utilities'
import {
    PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR,
    PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR,
    PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
} from './constants'
import { buildEntities } from './materials'
import { post } from './metadata'
import { ExampleOptions, PlayroomTestPatternSpec } from './types'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Playroom Test',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: 'testing 1, 2, 3...',
    originalPublish: '2018-12-19T07:00:00.000Z',
}

const spec: PlayroomTestPatternSpec = {
    exampleOptions: {
        initial: ExampleOptions.OPTION_TWO,
        patternSpecPropertyRange: Object.values(ExampleOptions),
        patternSpecPropertyType: PatternSpecPropertyType.DISCRETE,
    },
    patternDurationScalar: {
        initial: from.Scalar(PLAYROOM_TEST_PATTERN_DURATION_SCALAR),
        patternSpecPropertyRange: {
            max: from.Scalar(PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR),
            min: from.Scalar(PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR),
        },
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
    patternPitchScalar: {
        initial: from.Scalar(PLAYROOM_TEST_PATTERN_PITCH_SCALAR),
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
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
