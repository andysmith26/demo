// This file is executed on the server side when the page is loaded.
import { connectToDb } from '$lib/db';

export async function load() {
  try {
    const db = await connectToDb();

    // Insert a test document
    await db.collection('test').insertOne({
      message: 'Hello MongoDB!',
      timestamp: new Date(),
    });

    // Retrieve all documents from test collection
    const results = await db
      .collection('test')
      .find({})
      .sort({ timestamp: -1 })
      .limit(5)
      .toArray();

    // Manually convert results to plain objects
    const plainResults = results.map((doc) => ({
      _id: doc._id.toString(),
      message: doc.message,
      timestamp: doc.timestamp.toISOString(),
    }));

    return {
      status: 'connected',
      data: plainResults,
    };
  } catch (e) {
    console.error('Database test failed:', e);
    return {
      status: 'error',
      error: e.message,
    };
  }
}
