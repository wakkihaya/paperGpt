import type {
  IArticle,
  IHTMLTags,
  IArticleLinks,
} from 'scholarly/dist/lib/interfaces';
import type { FeedItemType } from './types';

type ScholarArticle = IArticle & Pick<IHTMLTags, 'description'> & IArticleLinks;

export const convertToFeedItem: FeedItemType[] = (
  articles: ScholarArticle[],
) => {
  return articles.map(
    ({ title, url, authors, year, numCitations, description, pdf }) =>
      ({
        title,
        url,
        authors,
        year,
        numCitation: numCitations,
        description,
        pdf,
      } as FeedItemType),
  );
};
