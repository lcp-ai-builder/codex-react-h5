import { messages, type MessageKey } from '@/i18n/messages'
import { useUiStore } from '@/store/uiStore'

export function useI18n() {
  const locale = useUiStore((s) => s.locale)

  const t = (key: MessageKey) => {
    return messages[locale]?.[key] ?? messages['zh-CN'][key] ?? key
  }

  return { locale, t }
}
