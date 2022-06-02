import React from 'react';
import { ViewStyle, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon, { ICON_MAP } from './Icon';

export type IconButtonProps = {
  /** Param to set the action to perform on button press */
  onPress: () => void;
  /** Optional param to set the icon width */
  iconWidth?: number;
  /** Optional param to set the icon height */
  iconHeight?: number;
  /** Optional param to set the icon color */
  iconColor?: string;
  /** Optional param to show a text next to the icon */
  buttonText?: string;
  /** Name of the icon to use*/
  iconName: keyof typeof ICON_MAP;
} & ViewStyle;

/** Common component for the menu style header btn */
const IconButton: React.FC<IconButtonProps> = ({
  iconWidth,
  iconHeight,
  iconColor,
  onPress,
  buttonText,
  iconName,
  ...viewStyleProps
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...viewStyleProps }}
      accessibilityRole={'button'}
    >
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name={iconName}
          width={iconWidth ?? 16}
          height={iconHeight ?? 16}
          fill={iconColor || 'black'}
          marginRight={5}
        />
        {!!buttonText && (
          <Text style={{ fontWeight: 'bold' }}>{buttonText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
