import { Post } from '../../../lib/mongoose';

export default async function handler(req, res) {
    
    if (req.method === 'post') {
        Post.create(req.body);
        console.log(res);
        return res.status(200).json({ message: 'post submitted' });
        
    } else {
        return res.status(404).json({ message: 'error' });
    }
}