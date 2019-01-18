// tslint:disable
export {
    playroomTestPatternSpecControlsMetadata,
    playroomTestPostMetadata,
    playroomTestTimeControlsMetadata,
    playroomTestOnlyPatternSpecificSpecMetadata,
    playroomTestOnlyStandardSpecMetadata,
    playroomTestValidationMetadata,
    playroomTestPresetsMetadata,
} from './metadatas'

const post: string = process.env.NODE_ENV === 'test' ? '' : require('./post.html')
const nonPost: string = process.env.NODE_ENV === 'test' ? '' : require('./nonPost.html')

export {
    nonPost,
    post,
}
