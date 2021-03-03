import React, { useContext } from "react"
import RootContext from "../../context"
import { BtnRemove } from "../../components/universal"
import { Row, Col, Card, Typography } from "antd"

const { Title } = Typography

function CardCurrency(props) {
  const {
    amountBaseCurrency,
    onRemoveFromUsingCurrency,
    getPriceByCodeCurrency,
  } = useContext(RootContext)
  return (
    <Col span={24}>
      <Card>
        <Row>
          <Col span={20}>
            <Row>
              <Col span={24}>
                <Title level={5} className="d-flex justify-content-between">
                  <span>{props.data.code}</span>
                  <span>
                    {getPriceByCodeCurrency(props.data.code) ||
                      "0" * amountBaseCurrency}
                  </span>
                </Title>
              </Col>
              <Col span={24}>
                <span>
                  {props.data.code} - {props.data.name}
                </span>
              </Col>
              <Col span={24}>
                <small>
                  1 USD = {getPriceByCodeCurrency(props.data.code) || "--"}{" "}
                  {props.data.code}
                </small>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <BtnRemove
              onClick={() => onRemoveFromUsingCurrency(props.data.code)}
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-center align-items-center"
            >
              <span>(-)</span>
            </BtnRemove>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default CardCurrency
