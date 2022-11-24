import axios from 'axios'

import LanguageType from "../types/language"

export const getLanguages = async () => {
    return [
        { name: 'عربي', abbr: 'ae', flag: 'ae' },
        { name: 'English', abbr: 'en', flag: 'gb' },
        { name: 'Français', abbr: 'fr', flag: 'fr' },
        { name: 'Tagalog', abbr: 'tg', flag: 'ph' },
        {
            name: 'Pakistan', abbr: 'ur', flag: 'pk', items: [
                { name: 'Urdu', abbr: 'ur' },
                { name: 'Punjabi', abbr: 'pa' },
            ]
        },
        { name: 'Vietnam', abbr: 'vn', flag: 'vn' },
        {
            name: 'India', abbr: 'in', flag: 'in', items: [
                { name: 'Hindi', abbr: 'hi_IN' },
                { name: 'Marathi', abbr: 'mr_IN' },
                { name: 'Gujarati', abbr: 'gu_IN' },
                { name: 'Telugu', abbr: 'te' },
                { name: 'Malayalam', abbr: 'ml_IN' },
                { name: 'Bengali', abbr: 'bn' },
            ]
        },
        { name: 'Russian', abbr: 'ru', flag: 'ru' },
    ]
    const res = await axios.get<LanguageType[]>('/languages')
    return res.data
} 