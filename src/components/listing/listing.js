import { StyleSheet } from 'react-native';

export const listing = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    textAlign: 'center',
    color: '#6E6E6E',
  },
  containerListing: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  containerInput: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2980B9',
    padding: 10
  },
  input: {
    backgroundColor: '#fff',
    color: '#6E6E6E',
    borderRadius: 3,
    padding: 10,
    width: '75%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2980B9',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 3,
    width: '20%'
  },
  item: {
    fontSize: 16,
    color: '#6E6E6E',
    fontWeight: 'bold'
  },
  itemChecked: {
    fontSize: 16,
    color: '#3FAF47', 
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#3FAF47",
    fontWeight: 'bold'
  },
  checkboxChecked: {
    backgroundColor: '#3FAF47',
    width: 15,
    height: 15, 
    marginRight: 10,
    borderColor: '#3FAF47',
    borderWidth: 2
  },
  checkbox: {
    width: 15,
    height: 15, 
    borderWidth: 2,
    borderColor: '#6E6E6E',
    marginRight: 10
  },
  boxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5
  },
  boxItemButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})