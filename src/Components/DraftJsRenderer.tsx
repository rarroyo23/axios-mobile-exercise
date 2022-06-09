import React from 'react';
import { StyleSheet } from 'react-native';
import { RawDraftContentBlock } from 'draft-js';
import getRNDraftJSBlocks from 'react-native-draftjs-render';

export type DraftJsRendererProps = {
  /** Param to set the draft js content */
  contentState: RawDraftContentBlock;
};

/** Common component to render the draft-js block object */
const DraftJsRenderer: React.FC<DraftJsRendererProps> = ({ contentState }) => {
  return getRNDraftJSBlocks({
    contentState,
    customStyles: drafJsContentStyle,
  });
};

export default DraftJsRenderer;

const drafJsContentStyle = StyleSheet.flatten({
  unstyled: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 18,
    marginBottom: 10,
  },
  link: {
    color: '#2257DA',
    fontWeight: 'bold',
  },
  unorderedListItemContainer: {
    marginBottom: 15,
    position: 'relative',
    marginLeft: 19,
  },
  unorderedListItemBullet: {
    marginRight: 5,
    position: 'relative',
    top: 6,
    width: 6,
    height: 6,
    alignSelf: 'flex-start',
  },
  'unordered-list-item': {
    fontSize: 14,
    lineHeight: 18,
    alignSelf: 'flex-start',
    flex: 1,
  },
  orderedListContainer: {
    marginBottom: 18,
  },
  orderedListItemNumber: {
    fontSize: 14,
    lineHeight: 21,
    marginRight: 11,
    alignSelf: 'flex-start',
    color: 'black',
  },
  'ordered-list-item': {
    alignSelf: 'flex-start',
    fontSize: 14,
    lineHeight: 21,
    flex: 1,
    marginBottom: 10,
  },
  'code-block': {
    backgroundColor: '#e2e2e2',
  },
  blockquote: {
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 33,
    paddingTop: 24,
    marginBottom: 10,
    fontSize: 33,
    letterSpacing: -2,
  },
  viewAfterList: {
    marginBottom: 10,
  },
});
