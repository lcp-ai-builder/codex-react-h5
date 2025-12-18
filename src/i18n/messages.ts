export type Locale = 'zh-CN' | 'en'

export const messages = {
  'zh-CN': {
    'header.avatar': '头像',
    'header.back': '返回',
    'nav.my': '我的',
    'nav.trade': '交易',
    'nav.messages': '消息',
    'nav.settings': '设置',
    'title.my': '我的',
    'title.trade': '交易',
    'title.messages': '消息',
    'title.settings': '设置',
    'title.login': '登录',
    'title.register': '注册',
    'title.profile': '个人信息',
    'login.subtitle': '请先登录后继续。',
    'login.name': '用户名',
    'login.submit': '登录',
    'login.register': '注册',
    'register.submit': '注册',
    'profile.notLoggedIn': '当前未登录。',
    'profile.goLogin': '去登录',
    'profile.logout': '退出登录'
  },
  en: {
    'header.avatar': 'Avatar',
    'header.back': 'Back',
    'nav.my': 'My',
    'nav.trade': 'Trade',
    'nav.messages': 'Messages',
    'nav.settings': 'Settings',
    'title.my': 'My',
    'title.trade': 'Trade',
    'title.messages': 'Messages',
    'title.settings': 'Settings',
    'title.login': 'Login',
    'title.register': 'Register',
    'title.profile': 'Profile',
    'login.subtitle': 'Please sign in to continue.',
    'login.name': 'Username',
    'login.submit': 'Sign in',
    'login.register': 'Register',
    'register.submit': 'Register',
    'profile.notLoggedIn': 'You are not signed in.',
    'profile.goLogin': 'Go to Login',
    'profile.logout': 'Sign out'
  }
} as const

export type MessageKey = keyof (typeof messages)['zh-CN']
