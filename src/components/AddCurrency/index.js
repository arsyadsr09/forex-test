import React, { useContext } from "react"
import { Col, Button, AutoComplete } from "antd"
import RootContext from "../../context"

function AddCurrency() {
  const {
    onSelectCurrency,
    selectedCurrency,
    addCurrencyStatus,
    onSubmitCurrency,
    setAddCurrencyStatus,
    optionsCurrency,
  } = useContext(RootContext)

  return (
    <Col span={24} style={{ marginTop: "1rem" }}>
      {!addCurrencyStatus ? (
        <Button
          type="primary"
          block
          onClick={() => setAddCurrencyStatus(!addCurrencyStatus)}
        >
          (+) Add Currency
        </Button>
      ) : (
        <Col className="d-flex justify-content-center">
          <AutoComplete
            options={optionsCurrency}
            value={selectedCurrency}
            style={{ width: "75%" }}
            onSelect={onSelectCurrency}
          />
          <Button type="primary" onClick={onSubmitCurrency}>
            Submit
          </Button>
        </Col>
      )}
    </Col>
  )
}

export default AddCurrency
