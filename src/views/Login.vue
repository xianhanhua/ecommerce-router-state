<template>
  <main class="login-page">
    <section class="login-visual">
      <div class="visual-content">
        <p>Vue Router 4 + Pinia</p>
        <h1>电商购物平台</h1>
        <span>认证状态将保存到 localStorage，刷新页面后仍可恢复登录状态。</span>
      </div>
    </section>

    <section class="login-panel">
      <el-form ref="formRef" :model="form" :rules="rules" label-position="top" @submit.prevent>
        <h2>账号登录</h2>
        <p class="hint">测试账号：admin / 123456</p>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" size="large" placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            size="large"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>

        <el-button type="primary" size="large" class="full-button" :loading="loading" @click="submit">
          登录并进入商品页
        </el-button>
      </el-form>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { login } from '@/api/auth'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const formRef = ref()
const loading = ref(false)
const form = reactive({
  username: 'admin',
  password: '123456'
})

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

async function submit() {
  await formRef.value.validate()
  loading.value = true

  try {
    const user = await login(form)
    userStore.setUser(user)
    ElMessage.success('登录成功')
    router.push(route.query.redirect || '/products')
  } catch (error) {
    ElMessage.error(error.message)
  } finally {
    loading.value = false
  }
}
</script>
