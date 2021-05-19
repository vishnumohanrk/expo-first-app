import * as React from 'react';
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native';

import { TArticle } from '../utils';
import { ArticleCard } from './ArticleCard';
import { ListDivider } from './helper/ListDivider';
import { AppHeader } from './helper/ListHeader';

type ArticleListProps = Omit<FlatListProps<TArticle>, 'renderItem'> & {
  title: string;
};

export const ArticleList = ({ data, title, ...rest }: ArticleListProps) => {
  const Header = () => <AppHeader text={title} />;

  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={i => i.id}
      renderItem={({ item }) => <ArticleCard {...item} />}
      ItemSeparatorComponent={ListDivider}
      ListHeaderComponent={Header}
      ListFooterComponent={View}
      ListFooterComponentStyle={styles.footer}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  footer: {
    height: 64,
  },
});
