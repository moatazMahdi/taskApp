import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigationTypes';
import { styles } from './styles';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;


const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const {item} = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
              translucent={false}
              animated
              barStyle="light-content"
            />
      <Image source={{uri:item.urlToImage}} style={styles.image}/>
      <View style={styles.textContainer}>
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.textDescription}>{item.description}</Text>
      </View>
    </SafeAreaView>
  )
}

export default DetailScreen