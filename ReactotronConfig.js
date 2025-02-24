import Reactotron from 'reactotron-react-native';

Reactotron.configure({host: "192.168.100.72"})
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

// Export Reactotron for use in other parts of the app
export default Reactotron;
