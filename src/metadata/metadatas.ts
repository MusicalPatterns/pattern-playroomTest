import { Metadata } from '@musical-patterns/pattern'
import { nonPost, post } from './posts'

const baseMetadata: Metadata = {
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const playroomTestSpecControlsMetadata: Metadata = {
    ...baseMetadata,
    description: nonPost,
    musicalIdeaIllustrated: 'spec controls',
    originalPublish: '2018-12-19T07:00:00.000Z',
}

const playroomTestPostMetadata: Metadata = {
    ...baseMetadata,
    description: post,
    formattedName: 'Playroom Test',
    musicalIdeaIllustrated: 'post',
    order: 1,
    originalPublish: '2019-01-15T07:00:00.000Z',
}

const playroomTestTimeControlsMetadata: Metadata = {
    ...baseMetadata,
    description: `I really should add a new pattern for testing text-only descriptions \
    but this wouldn't be the first overloaded pattern here so why start being good now`,
    musicalIdeaIllustrated: 'time controls',
    originalPublish: '2019-01-18T07:00:00.000Z',
}

const playroomTestOnlyPatternParticularSpecsMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'only pattern-particular spec',
    originalPublish: '2019-01-18T08:00:00.000Z',
}

const playroomTestOnlyStandardSpecsMetadata: Metadata = {
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

const playroomTestLongDurationMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'long duration',
    order: 8,
    originalPublish: '2019-03-03T11:00:00.000Z',
}

const playroomTestFiniteMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'does not repeat forever',
    order: 9,
    originalPublish: '2019-04-02T11:00:00.000Z',
}

const playroomTestRepetendMetadata: Metadata = {
    ...baseMetadata,
    musicalIdeaIllustrated: 'repeats forever but not from the beginning',
    order: 10,
    originalPublish: '2019-04-02T11:00:00.000Z',
}

export {
    playroomTestSpecControlsMetadata,
    playroomTestPostMetadata,
    playroomTestTimeControlsMetadata,
    playroomTestOnlyPatternParticularSpecsMetadata,
    playroomTestOnlyStandardSpecsMetadata,
    playroomTestValidationMetadata,
    playroomTestPresetsMetadata,
    playroomTestLongDurationMetadata,
    playroomTestFiniteMetadata,
    playroomTestRepetendMetadata,
}
