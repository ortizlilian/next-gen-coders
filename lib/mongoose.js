const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://n3xtgencoders:8wxMKxrNmOX7lGo4@cluster0.rad1l04.mongodb.net/?retryWrites=true&w=majority';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };
    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// const PostSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   content: String,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   category: String
// });

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    date: {
            type: Date,
            default: Date.now,
          },
    category: { type: String, required: true },
  }, { collection: 'posts' });

// PostSchema.
const Post = mongoose.model('Post', PostSchema);

// Post.find
// Post.create

module.exports = {
  connectToDatabase,
  Post
};