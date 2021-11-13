import posts from '../../posts.json'

const Post = props => {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
            <p>{props.post.Instructor}</p>
            <p>{props.post.Duration}</p>
        </div>
    )
}

Post.getInitialProps = ({query}) => {
    return {
        post: posts[query.id]
    }
}

export default Post