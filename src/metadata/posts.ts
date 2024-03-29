// tslint:disable

import { Maybe } from '@musical-patterns/utilities'

const env: Maybe<string> = process.env.NODE_ENV

const post: string = env !== 'test' && env != 'material' ? require('./post.html').default : ''
const nonPost: string = env === 'development' || env === 'production' ? require('./nonPost.html') : ''

export {
    post,
    nonPost,
}
