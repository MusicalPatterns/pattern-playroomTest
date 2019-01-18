import { PatternMetadata } from '@musical-patterns/pattern'
import { nonPost, post } from './posts'

const baseMetadata: PatternMetadata = {
    description: nonPost,
    formattedName: 'Playroom Test',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '',
}

const playroomTestPatternSpecControlsMetadata: PatternMetadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'pattern spec controls',
    originalPublish: '2018-12-19T07:00:00.000Z',
}

const playroomTestPostMetadata: PatternMetadata = {
    ...baseMetadata,
    description: post,
    musicalIdeaIllustrated: 'post',
    originalPublish: '2019-01-15T07:00:00.000Z',
}

const playroomTestTimeControlsMetadata: PatternMetadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'time controls',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestOnlyPatternSpecificSpecMetadata: PatternMetadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'only pattern-specific spec',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestOnlyStandardSpecMetadata: PatternMetadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'only standard spec',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestValidationMetadata: PatternMetadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'validation',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestPresetsMetadata: PatternMetadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'presets',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

export {
    playroomTestPatternSpecControlsMetadata,
    playroomTestPostMetadata,
    playroomTestTimeControlsMetadata,
    playroomTestOnlyPatternSpecificSpecMetadata,
    playroomTestOnlyStandardSpecMetadata,
    playroomTestValidationMetadata,
    playroomTestPresetsMetadata,
}
