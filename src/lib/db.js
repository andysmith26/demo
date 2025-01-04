// src/lib/db.js
import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

export async function connectToDb() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    return client.db('myapp');
  } catch (e) {
    console.error('Could not connect to MongoDB', e);
    throw e;
  }
}
