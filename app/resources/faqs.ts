import axios from 'axios'

import FaqType from '../types/faq'

export const getFaqs = async () => {
    return [
        { question: 'What if i didn’t claim my prize on time ?', answer: 'If you didn’t claim your prize on time, we kindly invite you to reach out to us trough the available channels provided.' },
        { question: 'My gift card voucher has expired what can i do?', answer: 'If you didn’t claim your prize on time, we kindly invite you to reach out to us trough the available channels provided.' },
        { question: 'I claimed my reward but didn’t receive it till now. ', answer: 'If you didn’t claim your prize on time, we kindly invite you to reach out to us trough the available channels provided.' },
        { question: 'Why do i need to connect to any social media account ?', answer: 'If you didn’t claim your prize on time, we kindly invite you to reach out to us trough the available channels provided.' },
        { question: 'Will i collect my reward if i don’t post on social media ?', answer: 'If you didn’t claim your prize on time, we kindly invite you to reach out to us trough the available channels provided.' },
        { question: 'What is the specific date for the raffle draws ?', answer: 'If you didn’t claim your prize on time, we kindly invite you to reach out to us trough the available channels provided.' },
    ]
    const res = await axios.get<FaqType[]>('/faqs')
    return res.data
} 