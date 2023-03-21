import { connectToDatabase } from '../../../../lib/mongoose';

export default async function handler(req, res) {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'Missing title parameter' });
  }
  const db = await connectToDatabase();
//   const Post = db.model('Post');
  const post = await Post.findOne({ title });

  if (!post) {
    return res.status(404).json({ error: `Post with title "${title}" not found` });
  }
  return res.status(200).json({ post });
}