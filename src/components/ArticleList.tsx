import * as React from 'react';
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native';

import { TArticle } from '../utils';
import { ArticleCard } from './ArticleCard';
import { ListDivider } from './helper/ListDivider';
import { Spinner } from './helper/Spinner';

type ArticleListProps = Omit<FlatListProps<TArticle>, 'renderItem'>;

export const ArticleList = ({ data, ...rest }: ArticleListProps) => (
  <FlatList
    style={styles.container}
    data={data}
    keyExtractor={i => i.id}
    renderItem={({ item }) => <ArticleCard {...item} />}
    ItemSeparatorComponent={ListDivider}
    ListFooterComponent={View}
    ListFooterComponentStyle={styles.footer}
    ListEmptyComponent={Spinner}
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  footer: {
    height: 64,
  },
});
