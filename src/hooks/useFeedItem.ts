import { useFetchFeedQuery } from '../services/modules/feed';
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

interface UseFeedItemConfig {
  searchWord: string;
}

export const useFeedItem = ({ searchWord }: UseFeedItemConfig) => {
  const { data, isLoading } = useFetchFeedQuery(searchWord);
  console.log(data);

  //TODO: change the data form
  return { data, isLoading };
};
