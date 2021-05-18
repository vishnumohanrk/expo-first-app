import * as React from 'react';

import { TArticle } from '../utils/types';

export const useArticles = () => {
  const [articles, setArticles] = React.useState<TArticle[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch('https://dev.to/api/articles');
    if (res.ok) {
      const d = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results: TArticle[] = (d as any[]).map(i => ({
        id: i.id.toString(),
        authorImage: i.user.profile_image_90,
        authorName: i.user.name,
        coverImage: i.social_image,
        subtitle: i.description,
        title: i.title,
        url: i.canonical_url,
      }));

      setArticles(results);
    } else {
      setArticles([]);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return {
    articles,
    update: getData,
    isLoading,
  };
};
