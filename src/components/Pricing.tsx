import React from 'react'
import { ProductList } from './ProductList'
import type { Product } from '../types/sales'

interface PricingProps {
  onAddToCart?: (product: Product, quantity: number) => void
  onDirectBuy?: (product: Product, quantity: number) => void
  onSelectPackage?: (packageId?: string) => void
}

export const Pricing: React.FC<PricingProps> = ({
  onAddToCart = () => {},
  onDirectBuy = () => {},
}) => {
  return <ProductList onAddToCart={onAddToCart} onDirectBuy={onDirectBuy} />
}

