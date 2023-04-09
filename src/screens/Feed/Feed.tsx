import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import { useTheme, useFeedItem } from '../../hooks';
import { FeedItem } from '../../components';

//TODO: Data should be come from the endpoint

const Feed = () => {
  const { Common, Fonts, Colors, Gutters, Layout, Images } = useTheme();
  const { data } = useFeedItem({
    searchWord: 'neuroscence',
  }); //TODO: should come from search input

  return (
    <FlatList
      data={data}
      style={[Gutters.smallPadding]}
      renderItem={({ item }) => (
        <FeedItem {...item} style={{ marginVertical: 5 }} />
      )}
    />
  );
};

export default Feed;
