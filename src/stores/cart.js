import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

const CART_KEY = 'cartItems'

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  } catch {
    return []
  }
}

export const useCartStore = defineStore('cart', () => {
  const items = ref(readCart())
  const totalCount = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))
  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  function sync() {
    localStorage.setItem(CART_KEY, JSON.stringify(items.value))
  }

  function addItem(product) {
    const current = items.value.find((item) => item.id === product.id)
    if (current) {
      current.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
    sync()
    ElMessage.success('已加入购物车')
  }

  function updateQuantity(id, quantity) {
    const current = items.value.find((item) => item.id === id)
    if (!current) return
    current.quantity = quantity
    sync()
  }

  function removeItem(id) {
    items.value = items.value.filter((item) => item.id !== id)
    sync()
  }

  function clearCart() {
    items.value = []
    localStorage.removeItem(CART_KEY)
  }

  return {
    items,
    totalCount,
    totalPrice,
    addItem,
    updateQuantity,
    removeItem,
    clearCart
  }
})
