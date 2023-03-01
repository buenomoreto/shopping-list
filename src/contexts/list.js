import React, { createContext, useState } from "react";

export const ListShopping = createContext([]);

export default function ListProvider({children}){
  const [list, setList] = useState();

  function handlerList(data) {
    setList(data);
  }

  return (
    <ListShopping.Provider value={{handlerList, list}}>
      { children }
    </ListShopping.Provider>
  )
}

