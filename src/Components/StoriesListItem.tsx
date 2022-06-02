import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AccessibleImage from './AccessibleImage';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from './Icon';

export type StoriesListItemProps = {
  //**  Param to set the data */
  storyData: Record<string, any>;
  onPress: () => void;
};

/**Component that will show the image, headline and author on the story list */
const StoriesListItem: FC<StoriesListItemProps> = ({ storyData, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AccessibleImage
          imageUrl={storyData.primary_image?.base_image_url}
          height={50}
          width={50}
          iconHeight={50}
          iconWidth={50}
        />

        <View style={styles.textContainer}>
          <View>
            <Text style={styles.headlineText}>{storyData.headline}</Text>
          </View>
          <Text>{storyData.authors[0]?.display_name}</Text>
        </View>
        <Icon
          name="RightChevron"
          height={24}
          width={24}
          marginLeft={10}
          alignSelf="center"
          fill={'gray'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StoriesListItem;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
    flex: 1,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 20,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
  },
  textContainer: {
    flexWrap: 'wrap',
    flex: 1,
    marginLeft: 16,
    flexDirection: 'column',
    flexGrow: 1,
  },
  headlineText: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
