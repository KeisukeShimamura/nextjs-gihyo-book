// 商品のカテゴリ
export type Category = 'shoes' | 'clothes' | 'book'
// 商品の状態
export type Condition = 'new' | 'used'

// ユーザ
export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  desciption: string
}

// 商品
export type Product = {
  id: number
  category: Category
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  conditon: Condition
  owner: User
}

// API Context
export type ApiContext = {
  apiRootUrl: string
}