import { createContext, useContext } from 'react'

import CustomerAccountType from '../types/account/customer';

type AccountType = CustomerAccountType | null

const AccountContext = createContext<{ account: AccountType, setAccount: (account: AccountType) => void }>({ account: null, setAccount: (account: AccountType) => { } })

export const useAccountContext = () => useContext(AccountContext);

export default AccountContext