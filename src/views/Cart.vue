<template>
  <div class="page-stack">
    <el-empty v-if="!cartStore.items.length" description="购物车暂无商品">
      <el-button type="primary" @click="$router.push('/products')">去选商品</el-button>
    </el-empty>

    <template v-else>
      <el-table :data="cartStore.items" border class="data-table">
        <el-table-column label="商品" min-width="260">
          <template #default="{ row }">
            <div class="table-product">
              <img :src="row.image" :alt="row.name" />
              <div>
                <strong>{{ row.name }}</strong>
                <span>{{ row.category }}</span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="单价" width="120">
          <template #default="{ row }">¥{{ row.price }}</template>
        </el-table-column>
        <el-table-column label="数量" width="180">
          <template #default="{ row }">
            <el-input-number
              :model-value="row.quantity"
              :min="1"
              :max="row.stock"
              @change="(value) => cartStore.updateQuantity(row.id, value)"
            />
          </template>
        </el-table-column>
        <el-table-column label="小计" width="120">
          <template #default="{ row }">¥{{ row.price * row.quantity }}</template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template #default="{ row }">
            <el-button type="danger" plain @click="cartStore.removeItem(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <section class="checkout-bar">
        <div>
          <span>合计数量：{{ cartStore.totalCount }} 件</span>
          <strong>应付金额：¥{{ cartStore.totalPrice }}</strong>
        </div>
        <el-button type="primary" size="large" @click="checkout">提交订单</el-button>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

function checkout() {
  ElMessage.success('订单已模拟提交')
  cartStore.clearCart()
}
</script>
