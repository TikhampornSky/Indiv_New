import posts from '../../posts.json'
import style from'../../style/display.module.css'

const Post = props => {
    return (
        <div className={style.test}> 
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