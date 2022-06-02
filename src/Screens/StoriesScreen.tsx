import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootNavStackParamList } from '../App';
import { StoriesListItem } from '../Components';
import { getStories } from '../Utils/StoryService';

type StoriesScreenProps = StackScreenProps<RootNavStackParamList, 'Stories'>;

/** Screen that will show the latest stories list */
const StoriesScreen: FC<StoriesScreenProps> = ({ navigation }) => {
  const [stories, setStories] = useState<Array<Record<string, any>>>([]);
  const [loading, setLoading] = useState<boolean>(undefined);
  const insets = useSafeAreaInsets();

  const onStoryPressed = (storyData: Record<string, any>) => {
    navigation.navigate('Headline', { storyData });
  };

  useEffect(() => {
    setLoading(true);
    getStories().then((data) => {
      setStories(data);
      setLoading(false);
    });
  }, []);

  const scrollViewStyle: ViewStyle = {
    paddingRight: insets.right,
    paddingLeft: insets.left,
    marginBottom: insets.bottom,
    flexGrow: 1,
  };

  const loadingContainerStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  };

  const loadingIndicatorStyle: ViewStyle = {
    marginBottom: 5,
  };

  return (
    <ScrollView
      scrollIndicatorInsets={{ right: 1 }}
      contentContainerStyle={scrollViewStyle}
    >
      {loading ? (
        <View style={loadingContainerStyle}>
          <ActivityIndicator
            size={'small'}
            color="black"
            style={loadingIndicatorStyle}
          />
          <Text>{'Loading...'}</Text>
        </View>
      ) : (
        stories.map((item) => {
          return (
            <StoriesListItem
              storyData={item}
              key={item.id}
              onPress={() => {
                onStoryPressed(item);
              }}
            />
          );
        })
      )}
    </ScrollView>
  );
};

export default StoriesScreen;
