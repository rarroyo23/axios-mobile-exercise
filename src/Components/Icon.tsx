import { View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import React, { FC } from 'react';

// New svgs need to set `fill` to `#000` and `stroke` to `#00F`. See /svgs for examples
import AxionsIcon from '../Svgs/axios-icon.svg';
import AxionsLogo from '../Svgs/axios-logo.svg';
import MenuBars from '../Svgs/bars-solid.svg';
import RightChevron from '../Svgs/chevron-right.svg';
import BackArrow from '../Svgs/back-arrow.svg';
import RouteIcon from '../Svgs/route-solid.svg';

export const ICON_MAP = {
  AxionsIcon,
  AxionsLogo,
  RightChevron,
  MenuBars,
  BackArrow,
  RouteIcon,
};
/**
 *  Props that need to be passed in
 */
export type IconProps = ViewStyle & {
  /**  enum name of the icon to use **/
  name: keyof typeof ICON_MAP;
  /** Fill color for the icon */
  fill?: string;
  /** Stroke color of the icon */
  stroke?: string;
  /**  optional number use to set the width; otherwise defaults to svg's width */
  width?: number;
  /**  optional number use to set the height; otherwise defaults to svg's height */
  height?: number;
};

/**
 * A common component to display assets(svgs)
 *
 */
const Icon: FC<IconProps> = ({
  name,
  width,
  height,
  fill,
  stroke,
  ...styleProps
}) => {
  let iconProps = Object.create({
    name,
    width,
    height,
    stroke,
    fill,
  });

  if (fill) {
    iconProps = Object.assign({}, iconProps, { fill });
  }

  if (stroke) {
    iconProps = Object.assign({}, iconProps, { stroke });
  }

  const Icon: FC<SvgProps> | undefined = ICON_MAP[name];
  if (!Icon) {
    return <></>;
  }

  if (width) {
    iconProps = Object.assign({}, iconProps, { width });
  }

  if (height) {
    iconProps = Object.assign({}, iconProps, { height });
  }

  return (
    <View {...styleProps} accessible={false}>
      <Icon {...iconProps} />
    </View>
  );
};

export default Icon;
