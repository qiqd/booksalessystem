
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let token = ''
  const removeToken = () => {
    token = ''
  }
  const getToken = () => {
    return token
  }
  const setToken = (t) => {
    token = t

  }

  return { token, removeToken, getToken, setToken }
}, {
  persist: {
    key: 'book-sales-system',
    storage: localStorage
  }

})
