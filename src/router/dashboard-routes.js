import dashboardPage from '@/pages/dashboard'
import Home from '@/pages/dashboard/Home'

import KawasanIndex from '@/pages/dashboard/kawasan'
import CreateKawasan from '@/pages/dashboard/kawasan/CreateKawasan'

export default [
  {
    path: '/dashboard',
    component: dashboardPage,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'kawasan',
        component: KawasanIndex
      },
      {
        path: 'kawasan/add',
        name: 'kawasan.add',
        component: CreateKawasan
      }
    ]
  }
]
