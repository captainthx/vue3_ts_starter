export interface PRODUCTS {
  id: number
  name: string
  buy?: number
  sell?: number
  tag_id?: number
  status?: string
}

export interface EMPLOYEES {
  id: number
  identity?: string
  name?: string
  address?: string
  tel?: string
  username?: string
  password?: string
  role?: string
}

export interface CUSTOMERS {
  id: number
  name: string
  tel: string
  address: string
  identity: string
  car_number?: string
  nickname?: string
  credit: number
}

export interface PURCHASE {
  id: number
  quantity: number
  quantity_sold?: number
  employee_name?: string
  stock: STOCK
  customers_name?: string
  product_name?: string
  date?: Date
  payment?: string
  total: number
  price: number
  receipt: string
  credit: number
}

export interface STOCK_ID {
  id?: number
  stock_id?: number
}

export interface COMPANY {
  id?: number
  name_th?: string
  address?: string
  tel?: string
  email?: string
  name_en?: string
  password?: string
  username?: string
  prefix?: string
  createdAt?: Date
  package_end?: Date
  package_start?: Date
  tax_id?: string
  logo?: string
}
export interface INCOME {
  id: number
  product_name: string
  quantity: number
  price_sell: number
  stock_id: number
  total: number
  date: Date
}
export interface EXPENSES {
  id: number
  name: string
  amount: number
  date: Date
}

export interface STOCK {
  id: number
  stock_id: number
}

export interface NAVLINKS {
  path: string
  name: string
  icon: string
  permission?: boolean
}

export interface TOKEN {
  id: number
  username: string
  name: string
  company: number
  role: string
}

export interface EXCEL {
  export: boolean
  headers?: Array<any>
  data: Array<any>
  dowloadLoading: boolean
}
