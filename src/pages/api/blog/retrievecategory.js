require('../../../../server/models/database');
import BlogPost from '../../../../server/models/BlogPost';

function titleCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const result = await BlogPost.find({category: titleCase(req.query.category.split('-').join(' '))});

        return res.status(200).json(result);
        
    } else {
        return res.status(404).json({ message: 'error' });
    }
}
