import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

type CardProps = {
    item: {
      urlToImage?: string;
      title: string;
    };
    onPress: () => void;
  };

const Card:React.FC<CardProps>  = ({item,onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.cardContainer}>
      <Image source={{uri: item.urlToImage}} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
