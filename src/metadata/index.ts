// tslint:disable

const post: string = process.env.NODE_ENV === 'test' ? '' : require('./post.html')
const otherPost: string = process.env.NODE_ENV === 'test' ? '' : require('./otherPost.html')

export {
    otherPost,
    post,
}
