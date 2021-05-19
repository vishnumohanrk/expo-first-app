import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { useQuery } from 'react-query';

import { storageKey, TArticle } from '../utils';

export const useStoredArticles = () => {
  const { data, refetch } = useQuery(storageKey, () =>
    AsyncStorage.getItem(storageKey),
  );

  const allSaved: TArticle[] = React.useMemo(
    () => (data ? JSON.parse(data) : []),
    [data],
  );

  const isSaved = React.useCallback(
    (id: string) => allSaved.some(i => i.id === id),
    [allSaved],
  );

  const addOne = (article: TArticle) => {
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
    addOne,
    deleteOne,
  };
};
