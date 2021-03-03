import React, { useContext } from "react"
import RootContext from "../../context"
import CardCurrency from "../CardCurrency"

function UsingCurrency() {
  const { usingCurrency } = useContext(RootContext)
  return (
    <>
      {usingCurrency.map((item, i) => {
        return <CardCurrency data={item} key={i} />
      })}
    </>
  )
}

export default UsingCurrency
