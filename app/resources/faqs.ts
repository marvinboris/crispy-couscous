import axios from 'axios'

import FaqType from '../types/faq'

export const getFaqs = async () => {
    return [
        { question: 'How to register ?', answer: 'Simply by going to our website and fill out some information such as name, email address, birth day, contact details' },
        { question: 'How to claim prizes ?', answer: 'Go to your dashboard and click claim your prizes.' },
        { question: 'How often is the raffle draw happening ?', answer: 'Draws will start as soon as spaces are filled. You will get a notification where draws you are participating in starts.' },
        { question: 'Am i limited to one prize only ?', answer: 'The answer is no. As many items you have bought, the more chances of winning you have. Every participant has multiple chances to win in the same draw.' },
        { question: 'Do you do delivery ?', answer: 'Yes, by a 3rd party company.' },
        { question: 'How are winners selected ?', answer: 'Winners are automatically chosen by the system authorized and approved by the DED (department of economic development).' },
        { question: 'Why do i need to line up my social media ?', answer: 'As a proof to you and others that our winners are real, we decided that it is mandatory to claim your prizes by social media channels.' },
        { question: 'How much time do i have to claim my prizes ?', answer: 'By the UAE law, if prizes are not claimed within 60 days, prizes will be going to UAE charities.' },
        { question: 'Are you a gambling company ?', answer: 'The answer is no. What we are doing are aligned with the DED and the UAE laws. We are only promoting our items by the use of raffle draws. Also, using this opportunity to reward your choices in shopping with us.' },
    ]
    const res = await axios.get<FaqType[]>('/faqs')
    return res.data
} 