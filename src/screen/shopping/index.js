import { StyleSheet, Text, View } from 'react-native';
import Listing from '../../components/listing/index.js';

export default function Shopping() {
  return (
    <View style={styles.container}>
      <Listing />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    flexDirection: 'column',
  },
});