import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';

import StoriesScreen from './Screens/StoriesScreen';
import IconButton from './Components/IconButton';
import AxiosHeaderIcon from './Components/AxiosHeaderLogo';
import HeadLineScreen from './Screens/HeadLineScreen';

enableScreens(true);

export type RootNavStackParamList = {
  Stories: undefined;
  Headline: {
    storyData: Record<string, any>;
  };
};

const RootNavStack = createStackNavigator<RootNavStackParamList>();

const AppRoutes: React.FC = () => {
  const headerStyles: StackNavigationOptions = {
    ...TransitionPresets.SlideFromRightIOS,
    headerMode: 'float',
    headerStyle: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      shadowColor: 'transparent',
    },
    headerTitleAlign: 'center',
    headerRight: () => (
      <IconButton iconName="MenuBars" onPress={() => {}} marginRight={16} />
    ),
    headerLeft: () => (
      <AxiosHeaderIcon
        marginRight={16}
        marginLeft={16}
        iconHeight={60}
        iconWidth={60}
      />
    ),
  };

  return (
    <RootNavStack.Navigator
      screenOptions={headerStyles}
      initialRouteName={'Stories'}
    >
      <RootNavStack.Screen name="Stories" component={StoriesScreen} />
      <RootNavStack.Screen name="Headline" component={HeadLineScreen} />
    </RootNavStack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
