const users = [
  {
    userId: '10001',
    username: 'admin',
    password: '123456',
    nickname: '平台管理员'
  },
  {
    userId: '10002',
    username: 'zhangsan',
    password: '123456',
    nickname: '张三'
  }
]

export function login(data) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const user = users.find(
        (item) => item.username === data.username && item.password === data.password
      )

      if (!user) {
        reject(new Error('账号或密码错误'))
        return
      }

      resolve({
        token: `mock-token-${user.userId}-${Date.now()}`,
        userId: user.userId,
        username: user.username,
        nickname: user.nickname
      })
    }, 500)
  })
}
