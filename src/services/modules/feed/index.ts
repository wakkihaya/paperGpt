import { api } from '../../api';

export type FeedQueryParam = {
  name: number;
};

export const feedApi = api.injectEndpoints({
  endpoints: build => ({
    fetchFeed: build.query<FeedQueryParam, string>({
      query: name => `/getFeeds/q=${name}`,
    }),
  }),
  overrideExisting: false,
});

export const { useFetchFeedQuery } = feedApi;
