import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 90,
  },
  statusBar: {
    backgroundColor: 'red',
  },
  listContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  newsTitle: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activityIndicator: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
