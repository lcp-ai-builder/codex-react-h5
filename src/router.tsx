import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/ui/AppLayout'
import { DetailPage } from '@/ui/pages/DetailPage'
import { HomePage } from '@/ui/pages/HomePage'
import { ListPage } from '@/ui/pages/ListPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'list', element: <ListPage /> },
      { path: 'detail/:id', element: <DetailPage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
])

