import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEYS = ['token', 'userId', 'username', 'nickname']

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const userId = ref(localStorage.getItem('userId') || '')
  const username = ref(localStorage.getItem('username') || '')
  const nickname = ref(localStorage.getItem('nickname') || '')

  const isLoggedIn = computed(() => Boolean(token.value))

  function setUser(data) {
    token.value = data.token
    userId.value = data.userId
    username.value = data.username
    nickname.value = data.nickname

    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.userId)
    localStorage.setItem('username', data.username)
    localStorage.setItem('nickname', data.nickname)
  }

  function clearUser() {
    token.value = ''
    userId.value = ''
    username.value = ''
    nickname.value = ''
    STORAGE_KEYS.forEach((key) => localStorage.removeItem(key))
  }

  return {
    token,
    userId,
    username,
    nickname,
    isLoggedIn,
    setUser,
    clearUser
  }
})
