const mongoose = require('mongoose');

export let blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    date: {
            type: Date,
            default: Date.now,
          },
    category: { type: String, required: true },
});

const BlogPost = mongoose.models.blogposts || mongoose.model('blogposts', blogPostSchema);
module.exports = BlogPost;
