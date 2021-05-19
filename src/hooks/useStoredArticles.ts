import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from 'react-query';

import { storageKey, TArticle } from '../utils';

export const useStoredArticles = () => {
  const { data, refetch } = useQuery(storageKey, () =>
    AsyncStorage.getItem(storageKey),
  );

  const allSaved: TArticle[] = data ? JSON.parse(data) : [];

  const isSaved = (id: string) => allSaved.some(i => i.id === id);

  const addNew = (article: TArticle) => {
    AsyncStorage.setItem(storageKey, JSON.stringify([article, ...allSaved]));
    refetch();
  };

  const deleteOne = (id: string) => {
    AsyncStorage.setItem(
      storageKey,
      JSON.stringify(allSaved.filter(i => i.id !== id)),
    );
    refetch();
  };

  return {
    allSaved,
    isSaved,
    addNew,
    deleteOne,
  };
};
