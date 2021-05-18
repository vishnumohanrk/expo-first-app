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

export const sampleData: TArticle = {
  coverImage: 'https://picsum.photos/id/14/300',
  title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus inventore, aspernatur labore animi iste dolor facere dolores ullam?`,
  authorImage: 'https://picsum.photos/id/14/18',
  authorName: 'Lorem, ipsum',
  url: 'https://dev.to/',
  id: '185a78',
};
