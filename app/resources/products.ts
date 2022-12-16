import axios from 'axios'

import ProductType from '../types/product'

export const getProducts = async () => {
    return [
        { name: `Palmolive naturals - Milk & honey shower gel.`, price: 12, tickets: 23, total_tickets: 10000, expires_at: new Date(2023, 0, 7), photo: '/images/frontend/products/palmolive.svg' },
        { name: `Ariel hand  detergent - 3kg sachet - powder`, price: 5, tickets: 1, total_tickets: 20000, expires_at: new Date(2022, 11, 30), photo: '/images/frontend/products/ariel.svg' },
        { name: `Fine baby premium diapers Large 148 pcs  7-14 Kg`, price: 56, tickets: 190, total_tickets: 1000, expires_at: new Date(2022, 11, 30), photo: '/images/frontend/products/diapers.svg' },
        { name: `Tork premium facial tissues`, price: 10, tickets: 767, total_tickets: 5000, expires_at: new Date(2023, 0, 1), photo: '/images/frontend/products/tork.svg' },
    ] as ProductType[]
    const res = await axios.get<ProductType[]>('/products')
    return res.data
} 