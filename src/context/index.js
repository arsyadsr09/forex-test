import { createContext, useState, useEffect } from "react"
import { defaultPools } from "../config/constants"
import { getForexLatest } from "../providers"

export const RootContext = createContext()

export function RootContextProvider() {
  const [amountBaseCurrency, setAmountBaseCurrency] = useState(1)
  const [usingCurrency, setUsingCurrency] = useState(defaultPools)
  const [listCurrencyFromAPI, setListCurrencyFromAPI] = useState()
  const [selectedCurrency, setSelectedCurrency] = useState("")

  const onSelectCurrency = (value) => {
    console.log(value)

    setSelectedCurrency(value)
  }

  const onChangeAmountBaseCurrency = (value) => {
    setAmountBaseCurrency(value)
  }

  const getLatest = async () => {
    try {
      const forexLatest = await getForexLatest()
      setListCurrencyFromAPI(forexLatest)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getLatest()
  }, [])

  return (
    <RootContext.Provider
      value={{
        amountBaseCurrency,
        usingCurrency,
        selectedCurrency,
        onSelectCurrency,
        onChangeAmountBaseCurrency,
      }}
    >
      {this.props.children}
    </RootContext.Provider>
  )
}

export default RootContext
