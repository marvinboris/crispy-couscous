import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { ReactElement, ReactNode, useState, useEffect } from 'react'
import { Provider } from 'react-redux'

import CountriesContext from '../app/contexts/countries'
import LanguageContext from '../app/contexts/language'
import LanguagesContext from '../app/contexts/languages'
import ThemeContext from '../app/contexts/theme'
import { getCountries } from '../app/resources/countries'
import { getLanguages } from '../app/resources/languages'
import store from '../app/store'
import Theme from '../app/types/theme.d'
import CountryType from '../app/types/country'
import LanguageType from '../app/types/language'
import '../styles/globals.css'
import tailwindConfig from '../tailwind.config'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [theme, setTheme] = useState<Theme | null>(null)
  const [language, setJustLanguage] = useState<LanguageType | null>(null)
  const [languages, setLanguages] = useState<LanguageType[] | null>(null)
  const [countries, setCountries] = useState<CountryType[] | null>(null)

  const setLanguage = (language: LanguageType | null) => {
    setJustLanguage(language)
    if (language) localStorage.setItem('frontend_lang', language.abbr)
  }

  useEffect(() => {
    if (theme === null) {
      const initialTheme: Theme = localStorage.getItem('dark') ? Theme.DARK : Theme.LIGHT
      setTheme(initialTheme)
    }
    if (language == null && languages !== null) {
      const abbr = localStorage.getItem('frontend_lang')

      if (abbr) {
        const initialLanguage = languages.find(l => l.abbr === abbr)

        if (initialLanguage) setLanguage(initialLanguage)
        else Router.push('/screen')
      }
    }
  }, [theme, language, languages])

  useEffect(() => {
    if (countries === null) {
      getCountries()
        .then(countries => setCountries(countries))
    }
  }, [countries])

  useEffect(() => {
    if (languages === null) {
      getLanguages()
        .then(languages => setLanguages(languages))
    }
  }, [languages])

  useEffect(() => {
    const root = document.querySelector('html')!
    if (theme === Theme.DARK) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <LanguagesContext.Provider value={{ languages, setLanguages }}>
          <CountriesContext.Provider value={{ countries, setCountries }}>
            <Head>
              <meta name="theme-color" content={theme === Theme.DARK ? tailwindConfig.theme.extend.colors.secondary[900] : "#ffffff"} />
            </Head>

            {theme !== null && <Provider store={store}>
              {getLayout(<Component {...pageProps} />)}
            </Provider>}
          </CountriesContext.Provider>
        </LanguagesContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}