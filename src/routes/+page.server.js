import { connectToDb } from '$lib/db';
import { ObjectId } from 'mongodb';

export async function load() {
  try {
    const db = await connectToDb();

    // Retrieve all users from the users collection
    const users = await db.collection('users').find({}).toArray();

    // Manually convert results to plain objects
    const plainUsers = users.map((user) => ({
      _id: user._id.toString(),
      name: user.name,
      title: user.title,
    }));

    return {
      users: plainUsers,
    };
  } catch (e) {
    console.error('Database fetch failed:', e);
    return {
      users: [],
      error: e.message,
    };
  }
}
