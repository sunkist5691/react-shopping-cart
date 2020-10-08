import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
   const [storeValue, setStoreValue] = useState(() => {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
   })

   const setValue = value => {
      localStorage.setItem(key, JSON.stringify(value))
      setStoreValue(value)
   }
   
   return [storeValue, setValue]
}

