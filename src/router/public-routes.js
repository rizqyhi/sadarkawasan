import publicPage from '@/pages/public'
import Home from '@/pages/public/Home'

export default [
  {
    path: '/',
    component: publicPage,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]
