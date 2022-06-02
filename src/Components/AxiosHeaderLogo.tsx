import React from 'react';
import { View, ViewStyle } from 'react-native';

import Icon from './Icon';

export type AxiosHeaderLogoProps = {
  /** Optional param to set the icon width */
  iconWidth?: number;
  /** Optional param to set the icon height */
  iconHeight?: number;
} & ViewStyle;

/** Component for the axios logo for the heder */
const AxiosHeaderLogo: React.FC<AxiosHeaderLogoProps> = ({
  iconWidth,
  iconHeight,
  ...viewStyleProps
}) => {
  return (
    <View
      style={{ ...viewStyleProps }}
      accessible={true}
      accessibilityLabel={'Axios'}
      accessibilityRole={'image'}
    >
      <Icon
        name="AxionsLogo"
        width={iconWidth ?? 40}
        height={iconHeight ?? 40}
      />
    </View>
  );
};

export default AxiosHeaderLogo;
