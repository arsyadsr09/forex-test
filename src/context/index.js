import { createContext, useState, useEffect } from "react"
import { defaultPools, pools, optionsDropdown } from "../config/constants"
import { getForexLatest } from "../providers"

export const RootContext = createContext()

export function RootContextProvider(props) {
  const [amountBaseCurrency, setAmountBaseCurrency] = useState(1)
  const [usingCurrency, setUsingCurrency] = useState(defaultPools)
  const [optionsCurrency, setOptionsCurrency] = useState(optionsDropdown)
  const [listCurrency, setListCurrency] = useState(pools)
  const [selectedCurrency, setSelectedCurrency] = useState("")
  const [addCurrencyStatus, setAddCurrencyStatus] = useState(false)

  const onSelectCurrency = (value) => {
    console.log(value)

    setSelectedCurrency(value)
    filterWithoutUsingCurrency()
  }

  const onSubmitCurrency = () => {
    let _temp = listCurrency.filter((item) => selectedCurrency === item.code)
    setUsingCurrency([...usingCurrency, _temp[0]])
    setSelectedCurrency("")
    setAddCurrencyStatus(false)
    filterWithoutUsingCurrency()
  }

  const onChangeAmountBaseCurrency = (value) => {
    setAmountBaseCurrency(value)
  }

  const getPriceByCodeCurrency = (code) => {
    return listCurrency.filter(
      (item) => item.code.toUpperCase() === code.toUpperCase()
    )[0].price
  }

  const onRemoveFromUsingCurrency = (code) => {
    let _tempUsingCurrency = usingCurrency.filter(
      (i) => i.code.toUpperCase() !== code.toUpperCase()
    )

    setUsingCurrency(_tempUsingCurrency)
    filterWithoutUsingCurrency()
  }

  const getLatest = async () => {
    try {
      const _forexLatest = await getForexLatest()
      // eslint-disable-next-line
      let _temp = listCurrency.map((item) => {
        for (const property in _forexLatest.rates) {
          if (property.toUpperCase() === item.code.toUpperCase()) {
            return {
              ...item,
              price: _forexLatest.rates[property],
            }
          }
        }
      })
      setListCurrency(_temp)
    } catch (err) {
      console.error(err)
    }
  }

  const filterWithoutUsingCurrency = () => {
    let _tempOptions = []
    optionsDropdown.forEach((e) => {
      if (!JSON.stringify(usingCurrency).includes(e.value)) {
        _tempOptions.push({ value: e.value, label: e.value, name: e.name })
      }
    })
    console.log(_tempOptions)
    setOptionsCurrency(_tempOptions)
  }
  useEffect(() => {
    getLatest()
  }, [])

  useEffect(() => {
    filterWithoutUsingCurrency()
  }, [usingCurrency])

  return (
    <RootContext.Provider
      value={{
        amountBaseCurrency,
        usingCurrency,
        selectedCurrency,
        addCurrencyStatus,
        optionsCurrency,
        setAddCurrencyStatus,
        onSelectCurrency,
        onChangeAmountBaseCurrency,
        onSubmitCurrency,
        onRemoveFromUsingCurrency,
        getPriceByCodeCurrency,
      }}
    >
      {props.children}
    </RootContext.Provider>
  )
}

export function RootContextConsumer({ children }) {
  return <RootContext.Consumer>{children}</RootContext.Consumer>
}

export default RootContext
