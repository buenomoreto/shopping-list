import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
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
    <View style={style.container}>
      <Text style={style.title}>
        Lista de compras
      </Text>
      {list && list.length ? 
        <Text style={style.title}>
        {count.length}/{list.length}
        </Text> 
      : null
      }
    </View>
  );
}
