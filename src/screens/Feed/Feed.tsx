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
import { useTheme } from '../../hooks';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={[{ height: 200 }]}>
    <Text>{title}</Text>
  </View>
);

//TODO: create the component for item.
//TODO: Data should be come from the endpoint

const Feed = () => {
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
};

export default Feed;
