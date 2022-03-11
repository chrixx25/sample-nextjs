import styles from '../styles/Post.module.css';
import Link from 'next/link'

const Posts = ({ post }) => {
    return (
        <Link href={`/post/${post.id}`}>
            <a className={styles.card} >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </a>
        </Link>


    )
}

export default Posts;