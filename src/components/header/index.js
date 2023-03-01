import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { header } from './header';
import { ListShopping } from '../../contexts/list'

export default function Header() {
  const { list } = useContext(ListShopping);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(list && list.length) {
      const newArray = list.filter(item => item.checked)
      setCount(newArray);
    }
  }, [list])
 

  return (
    <View style={header.container}>
      <Text style={header.title}>
        Lista de compras
      </Text>
      {list && list.length ? 
        <Text style={header.title}>
        {count.length}/{list.length}
        </Text> 
      : null
      }
    </View>
  );
}
