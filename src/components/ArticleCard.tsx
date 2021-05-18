import * as Linking from 'expo-linking';
import * as React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { appColors, rippleConfig } from '../utils';
import { TArticle } from '../utils/types';
import { AppText } from './AppText';
import { ArticleCardSave } from './ArticleCardSave';
import { ArticleCardShare } from './ArticleCardShare';

export const ArticleCard = (props: TArticle) => {
  const { authorImage, authorName, coverImage, subtitle, title, url } = props;

  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} android_ripple={rippleConfig}>
        <View>
          <Image source={{ uri: coverImage }} style={styles.articleImage} />
          <AppText style={styles.title} numberOfLines={2}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subtitle}
          </AppText>
          <View style={styles.authorIconsContainer}>
            <Image source={{ uri: authorImage }} style={styles.authorImage} />
            <AppText style={styles.authorName} numberOfLines={1}>
              {authorName}
            </AppText>
            <ArticleCardSave {...props} />
            <ArticleCardShare url={url} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

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
    height: 205,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: appColors.primaryText,
    paddingHorizontal: 16,
    paddingTop: 14,
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
