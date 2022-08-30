import { NAVLINKS } from '@/types'
// import Role from './Roles'

// const role = 'admin'

const NavLinks: Array<NAVLINKS> = [
  {
    path: 'home',
    name: 'หน้าแรก',
    icon: 'bi bi-house-fill',
    permission: true,
  },
  {
    path: 'foods',
    name: 'อาหาร',
    icon: 'bi bi-house-fill',
    permission: true,
  },
  {
    path: 'category',
    name: 'หมวดหมู่',
    icon: 'bi bi-house-fill',
    permission: true,
  },
  {
    path: 'employees',
    name: 'พนักงาน',
    icon: 'bi bi-house-fill',
    permission: true,
  },
  {
    path: 'report',
    name: 'รายงาน',
    icon: 'bi bi-house-fill',
    permission: true,
  },
]

export default NavLinks
