export type Locale = 'zh-CN' | 'en'

export const messages = {
  'zh-CN': {
    'nav.my': '我的',
    'nav.trade': '交易',
    'nav.messages': '消息',
    'nav.settings': '设置'
  },
  en: {
    'nav.my': 'My',
    'nav.trade': 'Trade',
    'nav.messages': 'Messages',
    'nav.settings': 'Settings'
  }
} as const

export type MessageKey = keyof (typeof messages)['zh-CN']

