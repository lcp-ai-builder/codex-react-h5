import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/ui/AppLayout'
import { MessagesPage } from '@/ui/pages/MessagesPage'
import { MyPage } from '@/ui/pages/MyPage'
import { SettingsPage } from '@/ui/pages/SettingsPage'
import { TradePage } from '@/ui/pages/TradePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/my" replace /> },
      { path: 'my', element: <MyPage /> },
      { path: 'trade', element: <TradePage /> },
      { path: 'messages', element: <MessagesPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
])
