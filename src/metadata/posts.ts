// tslint:disable

const post: string = process.env.NODE_ENV === 'test' ? '' : require('./post.html')
const nonPost: string = process.env.NODE_ENV === 'test' ? '' : require('./nonPost.html')

export {
    post,
    nonPost,
}
