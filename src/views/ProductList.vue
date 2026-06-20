<template>
  <div class="page-stack">
    <section class="metric-grid">
      <div class="metric">
        <span>商品数量</span>
        <strong>{{ products.length }}</strong>
      </div>
      <div class="metric">
        <span>购物车件数</span>
        <strong>{{ cartStore.totalCount }}</strong>
      </div>
      <div class="metric">
        <span>登录状态</span>
        <strong>{{ userStore.isLoggedIn ? '已登录' : '未登录' }}</strong>
      </div>
    </section>

    <section class="product-grid">
      <article v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" />
        <div class="product-info">
          <el-tag effect="plain">{{ product.category }}</el-tag>
          <h2>{{ product.name }}</h2>
          <p>库存 {{ product.stock }} 件，累计销量 {{ product.sales }} 件</p>
          <div class="product-actions">
            <strong>¥{{ product.price }}</strong>
            <el-button type="primary" @click="cartStore.addItem(product)">加入购物车</el-button>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getProducts } from '@/api/products'
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'

const products = ref([])
const cartStore = useCartStore()
const userStore = useUserStore()

onMounted(async () => {
  products.value = await getProducts()
})
</script>
