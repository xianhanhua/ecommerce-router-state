<template>
  <el-container class="app-shell">
    <el-aside width="232px" class="side-nav">
      <div class="brand">
        <span class="brand-mark">E</span>
        <div>
          <strong>电商购物平台</strong>
          <small>Router + Pinia</small>
        </div>
      </div>

      <el-menu :default-active="$route.path" router class="nav-menu">
        <el-menu-item index="/products">
          <el-icon><Goods /></el-icon>
          <span>商品管理</span>
        </el-menu-item>
        <el-menu-item index="/cart">
          <el-icon><ShoppingCart /></el-icon>
          <span>购物车</span>
        </el-menu-item>
        <el-menu-item index="/orders">
          <el-icon><Tickets /></el-icon>
          <span>我的订单</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="top-bar">
        <div>
          <h1>{{ $route.meta.title }}</h1>
          <p>已启用路由守卫、状态持久化和认证状态恢复</p>
        </div>
        <div class="user-panel">
          <el-tag type="success" effect="plain">{{ userStore.nickname }}</el-tag>
          <el-button type="primary" plain @click="logout">退出登录</el-button>
        </div>
      </el-header>

      <el-main class="main-area">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Goods, ShoppingCart, Tickets } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

function logout() {
  userStore.clearUser()
  router.push('/login')
}
</script>
