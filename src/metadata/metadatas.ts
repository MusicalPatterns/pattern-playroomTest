import { Metadata } from '@musical-patterns/pattern'
import { nonPost, post } from './posts'

const baseMetadata: Metadata = {
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '',
}

const playroomTestSpecControlsMetadata: Metadata = {
    ...baseMetadata,
    description: nonPost,
    formattedName: 'Playroom Test',
    musicalIdeaIllustrated: 'spec controls',
    originalPublish: '2018-12-19T07:00:00.000Z',
}

const playroomTestPostMetadata: Metadata = {
    ...baseMetadata,
    description: post,
    musicalIdeaIllustrated: 'post',
    order: 1,
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
    originalPublish: '2019-01-18T08:00:00.000Z',
}

const playroomTestOnlyStandardSpecMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'only standard spec',
    originalPublish: '2019-01-18T09:00:00.000Z',
}

const playroomTestValidationMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'validation',
    order: 3,
    originalPublish: '2019-01-18T10:00:00.000Z',
}

const playroomTestPresetsMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'presets',
    order: 7,
    originalPublish: '2019-01-18T11:00:00.000Z',
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
