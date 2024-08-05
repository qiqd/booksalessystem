
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let token = ''
  const removeToken = () => {
    token = ''
  }

  return { token, removeToken }
}, {
  persist: {
    key: 'book-sales-system',
    storage: localStorage
  }

})
