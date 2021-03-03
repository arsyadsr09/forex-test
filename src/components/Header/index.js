import React, { useContext } from "react"
import { Col, InputNumber, Row, Typography } from "antd"
import RootContext from "../../context"
import { HeaderComponent } from "../../components/universal"

const { Title } = Typography

function Header() {
  const { onChangeAmountBaseCurrency } = useContext(RootContext)

  return (
    <HeaderComponent>
      <div>USD - United States Dollars</div>
      <Row style={{ marginTop: ".8rem" }}>
        <Col span={12}>
          <Title level={3}>USD</Title>
        </Col>
        <Col span={12}>
          <InputNumber
            defaultValue={1}
            style={{ width: "100%" }}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChangeAmountBaseCurrency}
          />
        </Col>
      </Row>
    </HeaderComponent>
  )
}

export default Header
