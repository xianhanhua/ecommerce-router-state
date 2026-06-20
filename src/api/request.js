import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useUserStore } from '@/stores/user'

const request = axios.create({
  baseURL: '/api',
  timeout: 15000
})

request.interceptors.request.use((config) => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`
  }
  return config
})

request.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code !== 200) {
      ElMessage.error(res.msg || '请求失败')
      if (res.code === 401) {
        const userStore = useUserStore()
        userStore.clearUser()
        router.push('/login')
      }
      return Promise.reject(new Error(res.msg || '请求失败'))
    }

    return res.data
  },
  (error) => {
    const msg = error.response?.data?.msg || error.message || '网络错误'
    ElMessage.error(msg)

    if (error.response?.status === 401) {
      const userStore = useUserStore()
      userStore.clearUser()
      router.push('/login')
    }

    return Promise.reject(error)
  }
)

export default request
