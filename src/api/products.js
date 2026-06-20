export const products = [
  {
    id: 1,
    name: '智能降噪耳机',
    category: '数码配件',
    price: 299,
    stock: 36,
    sales: 1280,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: '轻薄机械键盘',
    category: '办公设备',
    price: 399,
    stock: 18,
    sales: 864,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: '便携保温杯',
    category: '生活用品',
    price: 89,
    stock: 92,
    sales: 2413,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: '人体工学办公椅',
    category: '家具家居',
    price: 899,
    stock: 11,
    sales: 306,
    image: 'https://images.unsplash.com/photo-1505843490701-5be5d83bb2c8?auto=format&fit=crop&w=600&q=80'
  }
]

export function getProducts() {
  return Promise.resolve(products)
}
