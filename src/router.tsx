import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/ui/AppLayout'
import { LoginPage } from '@/ui/pages/LoginPage'
import { MessagesPage } from '@/ui/pages/MessagesPage'
import { MyPage } from '@/ui/pages/MyPage'
import { ProfilePage } from '@/ui/pages/ProfilePage'
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
      { path: 'login', element: <LoginPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
])
