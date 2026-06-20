<template>
  <main class="not-found">
    <h1>404</h1>
    <p>页面不存在或地址输入有误。</p>
    <el-button type="primary" @click="$router.push('/products')">返回商品页</el-button>
  </main>
</template>
