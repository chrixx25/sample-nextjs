import styles from '../styles/Post.module.css'
import Posts from '../components/Posts'


const Post = ({ posts }) => {
    return (
        <div className={styles.grid}>
            {posts.map(post => (
                <Posts key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Post;