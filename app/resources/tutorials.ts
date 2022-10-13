import axios from 'axios'

import TutorialType from '../types/tutorial'

export const getTutorials = async () => {
    return [
        { photo: '/images/frontend/about/tutorials/tutorial-1.svg', rank: 1, title: 'How to create your account', subtitle: 'Welcome' },
        { photo: '/images/frontend/about/tutorials/tutorial-2.svg', rank: 2, title: 'How to claim your reward', subtitle: 'Creating your account' },
        { photo: '/images/frontend/about/tutorials/tutorial-3.svg', rank: 3, title: 'How to connect your social media account', subtitle: 'Creating your account' },
    ]
    const res = await axios.get<TutorialType[]>('/tutorials')
    return res.data
} 