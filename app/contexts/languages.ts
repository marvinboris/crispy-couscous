import { createContext, useContext } from 'react'

import LanguageType from '../types/language'

const LanguagesContext = createContext<{ languages: LanguageType[] | null, setLanguages: (languages: LanguageType[]) => void }>({ languages: null, setLanguages: (languages: LanguageType[]) => { } })

export const useLanguagesContext = () => useContext(LanguagesContext);

export default LanguagesContext