export type TArticle = {
  coverImage: string;
  title: string;
  subtitle: string;
  authorImage: string;
  authorName: string;
  url: string;
  id: string;
};

export const defData: TArticle = {
  coverImage: 'https://picsum.photos/id/14/300',
  title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus inventore, aspernatur labore animi iste dolor facere dolores ullam?`,
  authorImage: 'https://picsum.photos/id/14/18',
  authorName: 'Lorem, ipsum',
  url: 'https://dev.to/',
  id: '185a78',
};
