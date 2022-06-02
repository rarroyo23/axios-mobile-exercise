import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  const original = jest.requireActual('@react-navigation/native');
  return {
    ...original,
    useFocusEffect: () => jest.fn(),
  };
});

jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens');
  RealComponent.enableScreens = jest.fn();
  return RealComponent;
});
