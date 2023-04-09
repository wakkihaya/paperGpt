import * as functions from 'firebase-functions';
import { search } from 'scholarly';

// @link: Scholary api : https://github.com/ukalwa/scholarly
export const getFeeds = functions.https.onRequest(async (request, response) => {
  const query = request.query.q as string; // Example query parameter

  try {
    const apiResponse = await search(query);
    response.send(apiResponse);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error calling Scholarly API.');
  }
});
