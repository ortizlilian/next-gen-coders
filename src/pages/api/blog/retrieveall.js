require('../../../../server/models/database');
import BlogPost from '../../../../server/models/BlogPost';

export default async function handler(req, res) {
    if (req.method === 'GET') {

        const result = await BlogPost.find();
        
        return res.status(200).json(result);
        
    } else {
        return res.status(404).json({ message: 'error' });
    }
}
