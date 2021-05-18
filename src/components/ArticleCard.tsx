import * as React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { appColors, rippleConfig } from '../utils/constants';
import { AppText } from './AppText';
import { ArticleCardSave } from './ArticleCardSave';
import { ArticleCardShare } from './ArticleCardShare';

export const ArticleCard = () => (
  <View style={styles.container}>
    <Pressable onPress={() => {}} android_ripple={rippleConfig}>
      <View>
        <Image
          source={{ uri: 'https://picsum.photos/id/14/300' }}
          style={styles.articleImage}
        />
        <AppText style={styles.title} numberOfLines={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          inventore, aspernatur labore asperiores quibusdam animi iste dolor
          facere dolores ullam?
        </AppText>
        <View style={styles.authorIconsContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/id/14/18' }}
            style={styles.authorImage}
          />
          <AppText style={styles.authorName} numberOfLines={1}>
            Lorem, ipsum.
          </AppText>
          <ArticleCardSave />
          <ArticleCardShare />
        </View>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: appColors.secondaryBg,
  },
  articleImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: appColors.primaryText,
    padding: 16,
    paddingBottom: 7,
  },
  subTitle: {
    fontSize: 15,
    color: appColors.secondaryText,
    paddingHorizontal: 16,
  },
  authorIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  authorImage: {
    width: 18,
    height: 18,
    borderRadius: 2,
  },
  authorName: {
    flex: 1,
    marginLeft: 8,
    color: appColors.secondaryText,
  },
});
