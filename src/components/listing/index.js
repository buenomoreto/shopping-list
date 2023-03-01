
import { useState, useContext }  from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { listing } from './listing';
import { AntDesign } from '@expo/vector-icons'; 
import { ListShopping } from '../../contexts/list';

export default function Listing() {

  const [listShopping, setListShopping] = useState([]);
  const [item, setItem] = useState({});
  
  const { handlerList } = useContext(ListShopping);
  handlerList(listShopping);

  const addItemName = () => {
    if(item !== ""){
      setListShopping([...listShopping, item]);
      this.textInput.clear();
      setItem('');
     return;
    }
    alert("Preencha o campo")
  }

  const verifyRemoveItem = (index, nome) => {
    Alert.alert('Excluir item da lista', nome, [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelar pressionado'),
        style: 'cancel',
      },
      {text: 'Excluir', onPress: () => removeItemList(index)},
    ]);
  }
  
  function removeItemList(index) {
    const newlistShopping  = listShopping.filter((item, i) => i != index);
    setListShopping(newlistShopping);
    handlerList(newlistShopping);
  }
  
  function checkedItem(index) {
    const newArray = listShopping.map((item, i) => i == index ? {...item, checked: !item.checked} : item);
    setListShopping(newArray);
  }  

  return (
    <SafeAreaView style={listing.container}>
      { listShopping.length == 0 ? 
        <View style={listing.containerListing}>
          <Text style={listing.text}>Nenhum item na lista</Text> 
        </View>
      : null }
        <View style={listing.containerListing}>
          <ScrollView >
            { listShopping.map((item, i) => {
              return (
                <View key={i} style={[listing.boxItem, {backgroundColor: item.checked ? 'rgba(63, 175, 71, 0.2)' : '#fff'}]}>
                  <TouchableOpacity style={listing.boxItemButton} onPress={() => checkedItem(i)}>
                    <View 
                      style={item.checked ? listing.checkboxChecked : listing.checkbox}
                    /> 
                    <Text style={item.checked ? listing.itemChecked : listing.item}>{item.name}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => verifyRemoveItem(i, item.name)}>
                    <AntDesign name="closecircleo" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>
        </View>
      <View style={listing.containerInput}>
        <TextInput
          style={listing.input}
          ref={input => { this.textInput = input }}
          onChangeText={text  => setItem({name: text, checked: false})}
          placeholder="Novo item da lista"
        />
        <TouchableOpacity
          onPress={addItemName}
          style={listing.button}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
