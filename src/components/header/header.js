import { StyleSheet } from 'react-native';

export const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    paddingTop: 30,
    backgroundColor: '#2980B9'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    padding: 10
  }
})