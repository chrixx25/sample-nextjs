import Posts from '../components/Post';
import { server } from '../../config/index';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Hello</h1>
      <Posts posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/posts?_limit=6`);
  const posts = await response.json();

  return {
    props: {
      posts
    }
  }
}
