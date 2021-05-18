import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { appColors } from '../../utils';

export const Spinner = () => (
  <ActivityIndicator size="large" color={appColors.accent} />
);
