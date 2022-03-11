import { posts } from '../../../../data';

export default function handler(req, res) {
    const { id } = req.query;
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: `Id ${id} is not found.`
        });
    }

    return res.status(200).json(posts.find(post => post.id == id));
}