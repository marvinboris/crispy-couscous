import { createContext, useContext } from 'react'

import CustomerAccountType from '../types/account/customer';

type Type = CustomerAccountType | null

const AccountContext = createContext<{ account: Type, setAccount: (account: Type) => void }>({ account: null, setAccount: (account: Type) => { } })

export const useAccountContext = () => useContext(AccountContext);

export default AccountContext