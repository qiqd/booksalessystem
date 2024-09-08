import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore(
  'bookConunter',
  () => {
    const token = ref('')
    const adminInfo = ref({})
    return { token, adminInfo }
  },
  {
    persist: {
      key: 'book-sales-system'
    }
  }
)
