import { Text, View } from 'react-native';
import { header } from './header';

export default function Header() {
  return (
    <View style={header.container}>
      <Text style={header.title}>
        Lista de compras
      </Text>
      <Text style={header.title}>
        3/8
      </Text>
    </View>
  );
}
