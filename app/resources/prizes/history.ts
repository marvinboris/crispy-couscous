import axios from 'axios'
import PrizeType from '../../types/prize'

export const getPrizesHistory = async () => {
    return [
        { claimed_at: null, date: new Date(2022, 4, 10), ticket_num: 'VAL4092389149SHI', type: 'voucher', price: 50 },
        { claimed_at: new Date(2023, 2, 23), date: new Date(2022, 4, 12), ticket_num: 'VAL4092389149SHI', type: 'voucher', price: 100 },
        { claimed_at: new Date(2023, 2, 23), date: new Date(2022, 4, 12), ticket_num: 'VAL4092389149SHI', type: 'product', price: '1KG Gold 24k' },
        { claimed_at: null, date: new Date(2022, 4, 10), ticket_num: 'VAL4092389149SHI', type: 'product', price: 'iPhone 14 Pro' },
        { claimed_at: new Date(2023, 2, 23), date: new Date(2022, 4, 12), ticket_num: 'VAL4092389149SHI', type: 'voucher', price: 5000 },
    ] as PrizeType[]
    const res = await axios.get<PrizeType[]>('/tutorials')
    return res.data
} 