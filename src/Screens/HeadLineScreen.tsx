import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, useCallback } from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RawDraftContentBlock } from 'draft-js';

import { RootNavStackParamList } from '../App';
import { AccessibleImage, IconButton } from '../Components';

type HeadLineScreenProps = StackScreenProps<RootNavStackParamList, 'Headline'>;

/** Screen to show the details of the story */
const HeadLineScreen: FC<HeadLineScreenProps> = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { storyData } = route.params;

  const datePublished = new Date(storyData.published_date);

  const scrollViewStyle = {
    paddingRight: insets.right,
    paddingLeft: insets.left,
    marginBottom: insets.bottom,
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onAxiosLinkPress = useCallback(async () => {
    const url = 'https://www.axios.com/';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  const getBodyText = (blocks: Array<RawDraftContentBlock>) => {
    return blocks.map((item) => {
      const { text } = item;
      return (
        !!text && (
          <Text key={item.key} style={styles.blockContainer}>
            {text}
          </Text>
        )
      );
    });
  };

  const authorName = storyData.authors[0]?.display_name;
  const topic = storyData.topics[0]?.name;

  return (
    <ScrollView style={scrollViewStyle} scrollIndicatorInsets={{ right: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.authorsSection} accessible={true}>
          <AccessibleImage
            imageUrl={storyData.byline_photo}
            height={45}
            width={45}
            borderRadius={25}
            marginRight={10}
          />
          <View style={styles.authorAndDateContainer}>
            <Text style={styles.authorsNAmeText}>{authorName}</Text>
            <Text style={styles.datePublishedText}>
              {datePublished.toDateString()}
            </Text>
          </View>
        </View>

        <Text style={styles.headedLineText} accessibilityRole={'header'}>
          {storyData.headline}
        </Text>

        {!!topic && <Text style={styles.topicText}>{topic}</Text>}

        <View>
          <AccessibleImage
            imageUrl={storyData.primary_image?.base_image_url}
            height={200}
            width={'100%'}
            marginBottom={15}
            iconHeight={150}
            iconWidth={150}
            altText={storyData.primary_image?.alt_text}
          />
        </View>
        {getBodyText(storyData.blocks.blocks)}
        <View style={styles.bottomButtonSection}>
          <IconButton
            iconName="RouteIcon"
            onPress={onAxiosLinkPress}
            buttonText={'Axios.com'}
          />
          <IconButton
            iconName="BackArrow"
            onPress={onPressBack}
            buttonText={'Back'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HeadLineScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 18,
    marginTop: 16,
  },
  headedLineText: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 10,
  },
  authorsSection: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorsNAmeText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
  },
  authorAndDateContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  datePublishedText: {
    marginBottom: 10,
    fontSize: 11,
  },
  bottomButtonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  blockContainer: {
    marginBottom: 20,
  },
  topicText: {
    marginBottom: 20,
    fontSize: 12,
  },
});
