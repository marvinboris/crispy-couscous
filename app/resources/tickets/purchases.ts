import axios from 'axios'

import TicketType from '../../types/ticket'

export const getPurchasesTickets = async () => {
    return [
        { draw: new Date(2023, 8, 23), expiry: new Date(2024, 8, 23), num: 'VAL4092389149SHI', status: 'incoming', target: 230 },
        { draw: new Date(2023, 8, 23), expiry: new Date(2024, 8, 23), num: 'VAL4092389149SHI', status: 'incoming', target: 230 },
        { draw: new Date(2023, 8, 23), expiry: new Date(2024, 8, 23), num: 'VAL4092389149SHI', status: 'incoming', target: 230 },
        { draw: new Date(2023, 8, 23), expiry: new Date(2024, 8, 23), num: 'VAL4092389149SHI', status: 'incoming', target: 230 },
    ] as TicketType[]
    const res = await axios.get<TicketType[]>('/tutorials')
    return res.data
} 