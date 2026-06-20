# 电商购物平台前端路由器及状态管理实验

本项目按照实验报告要求实现了一个 Vue 3 电商购物平台前端示例，覆盖 Vue Router 路由配置、全局前置守卫、Pinia 用户状态管理、localStorage 状态持久化、购物车状态管理和基础页面交互。

## 技术栈

- Vue 3.4.29
- Vite 5.3.1
- Vue Router 4.3.3
- Pinia 2.1.7
- Element Plus 2.7.6
- Axios 1.7.2

## 功能清单

- 登录页：模拟账号认证，测试账号为 `admin / 123456`
- 路由守卫：未登录访问商品、购物车、订单页会自动跳转登录页
- 登录状态恢复：用户 token、userId、username、nickname 保存到 localStorage
- 商品页：商品卡片展示、加入购物车
- 购物车页：数量调整、删除商品、模拟提交订单
- 订单页：受保护路由示例
- 404 页面：匹配不存在的路由
- Axios 拦截器：自动添加 Authorization 请求头，统一处理 401

## 运行方式

```bash
npm install
npm run dev
```

浏览器访问终端提示的本地地址，通常是：

```text
http://127.0.0.1:5173
```

## 关键文件

- `src/router/index.js`：路由配置、嵌套路由、路由守卫
- `src/stores/user.js`：用户认证状态、localStorage 持久化
- `src/stores/cart.js`：购物车状态、localStorage 持久化
- `src/api/request.js`：Axios 实例和请求/响应拦截器
- `src/views/Login.vue`：登录流程
- `src/views/ProductList.vue`：商品列表与加入购物车
- `src/views/Cart.vue`：购物车管理
- `src/views/OrderList.vue`：受保护订单页面

## 验收建议

1. 清空浏览器 localStorage 后访问 `/products`，应自动跳转 `/login`。
2. 使用 `admin / 123456` 登录后，应进入商品页。
3. 刷新页面后登录状态应保持。
4. 登录状态下访问 `/login`，应自动跳转 `/products`。
5. 点击退出登录后，受保护页面应无法访问。
