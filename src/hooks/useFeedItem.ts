import type { FeedItemType } from './types';

const DATA: FeedItemType[] = [
  {
    title: 'First item',
    description: 'First item description',
    url: 'google.com',
    authors: ['me'],
    year: 2018,
    numCitation: 10,
    pdf: 'google.com',
  },
  {
    title: 'Second item',
    description: 'Second item description',
    url: 'google.com',
    authors: ['me'],
    year: 2018,
    numCitation: 10,
    pdf: 'google.com',
  },
];

export const useFeedItem = () => {
  //TODO: data should come from the api
  return { data: DATA };
};
