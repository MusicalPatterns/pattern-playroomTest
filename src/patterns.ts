import { PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { buildEntities } from './materials'
import { otherPost, post } from './metadata'
import { initialSpec, otherInitialSpec, specAttributes } from './specs'

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

const otherMetadata: PatternMetadata = {
    description: otherPost,
    formattedName: 'Other Playroom Test',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: 'testing A, B, C...',
    originalPublish: '2019-01-15T07:00:00.000Z',
}

const pattern: Pattern = {
    initialSpec,
    material,
    metadata,
    patternId: PatternId.PLAYROOM_TEST,
    specAttributes,
}

const otherPattern: Pattern = {
    initialSpec: otherInitialSpec,
    material,
    metadata: otherMetadata,
    patternId: PatternId.OTHER_PLAYROOM_TEST,
    specAttributes,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
    [ otherPattern.patternId ]: otherPattern,
})

export {
    pattern,
    otherPattern,
    patterns,
}
