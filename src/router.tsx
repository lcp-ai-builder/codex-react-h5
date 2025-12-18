import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/ui/AppLayout'
import { DetailPage } from '@/ui/pages/DetailPage'
import { HomePage } from '@/ui/pages/HomePage'
import { ListPage } from '@/ui/pages/ListPage'
import { MessagesPage } from '@/ui/pages/MessagesPage'
import { MyPage } from '@/ui/pages/MyPage'
import { SettingsPage } from '@/ui/pages/SettingsPage'
import { TradePage } from '@/ui/pages/TradePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'list', element: <ListPage /> },
      { path: 'my', element: <MyPage /> },
      { path: 'trade', element: <TradePage /> },
      { path: 'messages', element: <MessagesPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'detail/:id', element: <DetailPage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
])
