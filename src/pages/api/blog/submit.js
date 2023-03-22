require('../../../../server/models/database');
import BlogPost from '../../../../server/models/BlogPost';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const newBlogPost = new BlogPost({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            category: req.body.category
          });
          
        await newBlogPost.save();
        
        return res.status(200).json({ message: 'post submitted' });
        
    } else {
        return res.status(404).json({ message: 'error' });
    }
}
