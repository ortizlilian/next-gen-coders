require('../../../../server/models/database');
import BlogPost from '../../../../server/models/BlogPost';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const result = await BlogPost.findOne({title: req.query.title.split('-').join(' ')});

        return res.status(200).json(result);
        
    } else {
        return res.status(404).json({ message: 'error' });
    }
}
