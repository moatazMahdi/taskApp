import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: { item: any };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
