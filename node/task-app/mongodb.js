const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('tasks').insertMany(
    //   [
    //     { description: 'vacuum living room', completed: false },
    //     { description: 'get dog food', completed: true },
    //     { description: 'cook dinner', completed: false }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('There was an error inserting tasks');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
