import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetTopHeadlinesQuery } from '../../redux/services/newsEndpoints';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import { NavigationProps } from '../../navigation/navigationTypes';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Card from '../../components/Card/Card';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { data, error, isLoading } = useGetTopHeadlinesQuery(
    'country=us&category=business',
  );

  const ListData = () => {
    return (
      <View style={styles.listContainer}>
        <View>
          <Text style={styles.newsTitle}>News</Text>
        </View>
        <FlatList
          data={data?.articles}
          renderItem={({ item }) => (
            <Card
              item={item}
              onPress={() => navigation.navigate('DetailScreen', { item })}
            />
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} animated barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <HomeHeader />
        <BannerSlider />
        <ListData />
        {isLoading && <ActivityIndicator color="black" style={styles.activityIndicator} />}
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
