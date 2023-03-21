import { MongoClient } from 'mongodb'

export default class NextGenCodersDB {
    // Connection URL
    client = new MongoClient('mongodb+srv://next-gen-coders:AY9oOTzqK9wNwk2O@cluster0.ehfwib9.mongodb.net/?retryWrites=true&w=majority');
    collection;
    db;

    async start() {
        // Use connect method to connect to the server
        await this.client.connect();
        console.log('Connected successfully to server');
        // database name
        this.db = this.client.db('next-gen-coders');
        this.collection = this.db.collection('posts');
    }

    async query(category) {
        let findResult;
        if(category !== undefined) {
            findResult = await this.collection.find({ category: category}).toArray();
        } else {
            findResult = await this.collection.find().toArray();
        }
        
        //console.log('Found documents =>', findResult);
        return findResult;
    }

    async create(data) {
        const insertResult = await this.collection.insertMany([data]);
        // console.log('Inserted documents =>', insertResult);
    }

    collectionDB() {
        return this.collection;
    }

    close() {
        this.client.close();
    }
}
