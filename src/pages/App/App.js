import React from "react"
import { BodyComponent, FullPage } from "../../components/universal"
import { Row } from "antd"

import AddCurrency from "../../components/AddCurrency"
import UsingCurrency from "../../components/UsingCurrency"
import Header from "../../components/Header"

function App() {
  return (
    <FullPage>
      <Header />
      <BodyComponent>
        <Row>
          <UsingCurrency />
          <AddCurrency />
        </Row>
      </BodyComponent>
    </FullPage>
  )
}

export default App
