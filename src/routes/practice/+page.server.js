import { connectToDb } from '$lib/db';

export const actions = {
  default: async ({ request }) => {
    try {
      const db = await connectToDb();
      const data = await request.formData();
      const name = data.get('name');
      const title = data.get('title');
    } catch (e) {
      console.error('Database connection failed:', e);
      return {
        status: 500,
        body: {
          error: e.message,
        },
      };
    }
  },
};
