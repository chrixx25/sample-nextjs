
//import { useRouter } from 'next/router'
import Link from 'next/link'
import { server } from '../../../../config/index';
import Meta from '../../../components/Meta';

const post = ({ post }) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
        <>
            <Meta title={post.title} description={post.excerpt} />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

// export const getServerSideProps = async (context) => {
//     const id = context.params.id;
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`);
//     const post = await response.json();

//     return {
//         props: {
//             post
//         }
//     }
// }

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(
        `${server}/posts/${id}`);
    const post = await response.json();

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/posts`)

    const posts = await res.json()

    const ids = posts.map((post) => post.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default post