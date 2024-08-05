
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('bookConunter', () => {
  const token = ref('')
  return { token }
},
  {
    persist: {
      key: "book-sales-system",
    }
  }
)
