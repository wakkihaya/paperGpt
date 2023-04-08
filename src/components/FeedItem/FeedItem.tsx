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
  StyleProp,
  ViewStyle,
} from 'react-native';
import { FeedItemType, useTheme } from '../../hooks';

interface FeedItemProps extends FeedItemType {
  style?: StyleProp<ViewStyle>;
}

const FeedItem = ({
  title,
  description,
  url,
  authors,
  year,
  numCitation,
  pdf,
  style,
}: FeedItemProps) => {
  const { Layout, FontSize, Fonts, Colors, Gutters } = useTheme();
  return (
    <View
      style={[
        Layout.col,
        Layout.fullWidth,
        Gutters.smallHPadding,
        {
          minHeight: 100,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: Colors.circleButtonBackground,
        },
        style,
      ]}
    >
      <Text style={[Layout.fullWidth, Fonts.textRegular, Fonts.textBold]}>
        {title}
      </Text>
      <View style={[Layout.fullWidth, Gutters.regularBMargin, Layout.row]}>
        <Text style={[Layout.fill, Fonts.textGrayTiny]}>{authors}</Text>
        <Text style={[Layout.fill, Fonts.textGrayTiny]}>{year}</Text>
        <Text style={[Layout.fill, Fonts.textGrayTiny]}>
          Cited by {numCitation}
        </Text>
      </View>
      <Text style={[Layout.fullWidth, Fonts.textSmall]}>{description}</Text>
    </View>
  );
};

FeedItem.defaultProps = {
  style: {},
};

export default FeedItem;
