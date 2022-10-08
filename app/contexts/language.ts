import { createContext, useContext } from 'react'

import LanguageType from '../types/language'

const LanguageContext = createContext<{ language: LanguageType | null, setLanguage: (language: LanguageType | null) => void }>({ language: null, setLanguage: (language: LanguageType | null) => { } })

export const useLanguageContext = () => useContext(LanguageContext);

export default LanguageContext