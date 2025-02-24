import {View, Text} from 'react-native';
import React from 'react';
import NavigationContainerScreen from './src/navigation/NavigationContainerScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainerScreen />
    </Provider>
  );
};

export default App;
