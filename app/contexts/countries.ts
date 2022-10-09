import { createContext, useContext } from 'react'

import CountryType from '../types/country'

const CountriesContext = createContext<{ countries: CountryType[] | null, setCountries: (countries: CountryType[]) => void }>({ countries: null, setCountries: (countries: CountryType[]) => { } })

export const useCountriesContext = () => useContext(CountriesContext);

export default CountriesContext