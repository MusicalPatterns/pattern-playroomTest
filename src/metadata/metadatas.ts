import { Metadata } from '@musical-patterns/pattern'
import { nonPost, post } from './posts'

const baseMetadata: Metadata = {
    description: nonPost,
    formattedName: 'Playroom Test',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '',
}

const playroomTestSpecControlsMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'spec controls',
    originalPublish: '2018-12-19T07:00:00.000Z',
}

const playroomTestPostMetadata: Metadata = {
    ...baseMetadata,
    description: post,
    musicalIdeaIllustrated: 'post',
    originalPublish: '2019-01-15T07:00:00.000Z',
}

const playroomTestTimeControlsMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'time controls',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestOnlyPatternParticularSpecMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'only pattern-particular spec',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestOnlyStandardSpecMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'only standard spec',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestValidationMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'validation',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestPresetsMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'presets',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

export {
    playroomTestSpecControlsMetadata,
    playroomTestPostMetadata,
    playroomTestTimeControlsMetadata,
    playroomTestOnlyPatternParticularSpecMetadata,
    playroomTestOnlyStandardSpecMetadata,
    playroomTestValidationMetadata,
    playroomTestPresetsMetadata,
}
