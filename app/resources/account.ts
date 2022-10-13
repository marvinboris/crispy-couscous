import axios from 'axios'

import CustomerAccountType from '../types/account/customer'

export const getAccount = async () => {
    return {
        photo: '/images/backend/user-pic.svg',
        first_name: 'Pope',
        last_name: 'Schwartz',
        aid: 'FHKO57',
        email: 'pope.schwartz@valyou.com',
        phone: '+971 50 999 0003',
        birthdate: '1998-02-07',
    }
    const res = await axios.get<CustomerAccountType>('/faqs')
    return res.data
} 