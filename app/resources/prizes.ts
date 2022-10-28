import axios from 'axios'

import TicketType from '../types/ticket'

export const getPrizes = async () => {
    return [
        { draw: new Date(2022, 8, 23), expiry: new Date(2023, 8, 23), num: 'VAL4092389149SHI', status: 'claimed', target: 1000 },
        { draw: new Date(2022, 8, 23), expiry: new Date(2023, 8, 23), num: 'VAL4092389149SHI', status: 'claimed', target: 1000 },
        { draw: new Date(2022, 8, 23), expiry: new Date(2023, 8, 23), num: 'VAL4092389149SHI', status: 'claimed', target: 1000 },
        { draw: new Date(2022, 8, 23), expiry: new Date(2023, 8, 23), num: 'VAL4092389149SHI', status: 'claimed', target: 1000 },
    ] as TicketType[]
    const res = await axios.get<TicketType[]>('/tutorials')
    return res.data
} 