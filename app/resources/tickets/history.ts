import axios from 'axios'

import TicketType from '../../types/ticket'

export const getTicketsHistory = async () => {
    return [
        { draw: new Date(2023, 8, 23), expiry: new Date(2024, 8, 23), num: 'VAL4092389149SHI', status: 'incoming', target: 230 },
        { draw: new Date(2022, 8, 23), expiry: new Date(2023, 8, 23), num: 'VAL4092389149SHI', status: 'claimed', target: 1000, type: 'voucher', price: 50 },
        { draw: new Date(2022, 8, 23), expiry: new Date(2023, 8, 23), num: 'VAL4092389149SHI', status: 'failed', target: 1000 },
        { draw: new Date(2023, 8, 23), expiry: new Date(2024, 8, 23), num: 'VAL4092389149SHI', status: 'incoming', target: 230 },
        { draw: new Date(2022, 8, 23), expiry: new Date(2023, 8, 23), num: 'VAL4092389149SHI', status: 'claimed', target: 1000, type: 'product', price: 'iPhone 14 Pro  Max' },
    ] as TicketType[]
    const res = await axios.get<TicketType[]>('/tutorials')
    return res.data
} 