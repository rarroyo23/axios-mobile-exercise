import React, { FC } from 'react';
import { Image, ImageStyle, View, ViewStyle } from 'react-native';

import Icon from './Icon';

export type AccessibleImageProps = {
  /** The url for the image */
  imageUrl: string | undefined;
  /** The alternate text that will be use as the accessiblity label */
  altText?: string;
  /** Height for the icon on the default image */
  iconHeight?: number;
  /** Width for the icon on the default image */
  iconWidth?: number;
} & ImageStyle;

/** Component that makes the image assessible and replaces the image with a default one if there is no image */
const AccessibleImage: FC<AccessibleImageProps> = ({
  imageUrl,
  altText,
  iconHeight,
  iconWidth,
  ...restOfProps
}) => {
  const noImageContainerStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    ...restOfProps,
  };

  const imageStyle: ImageStyle = {
    ...restOfProps,
  };

  if (!imageUrl) {
    return (
      <View
        style={noImageContainerStyle}
        accessible={true}
        accessibilityLabel={'Image not found'}
        accessibilityRole={'image'}
      >
        <Icon
          name="AxionsIcon"
          height={iconHeight ?? 24}
          width={iconWidth ?? 24}
        />
      </View>
    );
  }

  return (
    <>
      <Image
        accessible={true}
        source={{ uri: imageUrl }}
        style={imageStyle}
        accessibilityLabel={altText}
        accessibilityRole={'image'}
      />
    </>
  );
};

export default AccessibleImage;
