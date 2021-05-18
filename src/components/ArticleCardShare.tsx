import * as React from 'react';

import { appColors } from '../utils/constants';
import { ArticleCardBtn } from './ArticleCardBtn';

export const ArticleCardShare = () => (
  <ArticleCardBtn
    color={appColors.secondaryText}
    icoName="share"
    label="Share Article"
    onPress={() => {}}
  />
);
