// contexts/ProductContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext<any>({})

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // データ取得ロジック
    setProducts([])
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}