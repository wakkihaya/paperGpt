import * as functions from 'firebase-functions';
import axios from 'axios';

// @link: Scholary api : https://github.com/ukalwa/scholarly
export const getFeeds = functions.https.onRequest(async (request, response) => {
  const query = request.query.q; // Example query parameter
  const url = `https://api.scholarly.pub/search?q=${query}`;
  const options = {
    headers: { 'User-Agent': 'Firebase Cloud Functions' },
  };

  try {
    const apiResponse = await axios.get(url, options);
    response.send(apiResponse.data);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error calling Scholarly API.');
  }
});
