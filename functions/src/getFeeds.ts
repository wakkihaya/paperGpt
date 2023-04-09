import * as functions from 'firebase-functions';
import { search } from 'scholarly';

// @link: Scholary api : https://github.com/ukalwa/scholarly
export const getFeeds = functions.https.onRequest(async (request, response) => {
  const query = request.query.q as string; // Example query parameter

  try {
    const apiResponse = await search(query);
    const data = { data: JSON.stringify(apiResponse) };
    console.log(data);
    response.status(200).json(data);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error calling Scholarly API.');

    if (error.response && error.response.status === 429) {
      // If we are rate-limited, wait for 1 minute before retrying
      await new Promise(resolve => setTimeout(resolve, 60000));
      try {
        const apiResponse = await search(query);
        const data = { data: apiResponse };
        response.status(200).json(data);
      } catch (error) {
        console.error(error);
        response.status(500).send('Error calling Scholarly API.');
      }
    } else {
      response.status(500).send('Error calling Scholarly API.');
    }
  }
});
