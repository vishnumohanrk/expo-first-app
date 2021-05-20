export const storageKey = 'storedArticles';

export const appColors = {
  primaryBg: '#202124',
  secondaryBg: '#313235',
  primaryText: '#F8F9FA',
  secondaryText: '#B8BCC1',
  accent: '#8AB4F8',
} as const;

export const rippleConfig = {
  color: '#ffffff1A',
} as const;

export type TArticle = {
  coverImage: string;
  title: string;
  subtitle: string;
  authorImage: string;
  authorName: string;
  url: string;
  id: string;
};

export const getArticles = async ({ pageParam = 1 }): Promise<TArticle[]> => {
  const response = await fetch(
    `https://dev.to/api/articles?page=${pageParam}&per_page=20`,
  );

  if (response.ok) {
    const data = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data as any[]).map(i => ({
      id: i.id.toString(),
      authorImage: i.user.profile_image_90,
      authorName: i.user.name,
      coverImage: i.social_image,
      subtitle: i.description,
      title: i.title,
      url: i.canonical_url,
    }));
  }

  throw new Error();
};
