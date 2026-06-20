<template>
  <div class="page-stack">
    <el-alert
      title="订单页是受保护路由，未登录用户访问时会被 beforeEach 守卫重定向到登录页。"
      type="info"
      :closable="false"
      show-icon
    />

    <el-table :data="orders" border class="data-table">
      <el-table-column prop="id" label="订单号" width="150" />
      <el-table-column prop="name" label="商品" min-width="220" />
      <el-table-column prop="amount" label="金额" width="120">
        <template #default="{ row }">¥{{ row.amount }}</template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="120">
        <template #default="{ row }">
          <el-tag :type="row.status === '已完成' ? 'success' : 'warning'">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="下单时间" width="180" />
    </el-table>
  </div>
</template>

<script setup>
const orders = [
  { id: 'OD20260620001', name: '智能降噪耳机', amount: 299, status: '已完成', createdAt: '2026-06-20 10:24' },
  { id: 'OD20260620002', name: '轻薄机械键盘', amount: 399, status: '待发货', createdAt: '2026-06-20 14:18' },
  { id: 'OD20260620003', name: '便携保温杯', amount: 178, status: '已完成', createdAt: '2026-06-19 19:42' }
]
</script>
