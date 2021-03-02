import React from "react"
import { optionsDropdown } from "../../config/constants"
import { HeaderComponent, BodyComponent, FullPage, BtnRemove } from "../../components/universal"
import {
  Typography,
  Row,
  Col,
  InputNumber,
  Card,
  Button,
  AutoComplete,
  Input,
} from "antd"

const { Title } = Typography

function App() {
  return (
    <FullPage>
      {/* static USD */}
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
              onChange={onChange}
            />
          </Col>
        </Row>
      </HeaderComponent>
      <BodyComponent>
        <Row>
          <Col span={24}>
            <Card>
              <Row>
                <Col span={20}>
                  <Row>
                    <Col span={24}>
                      <Title
                        level={5}
                        className="d-flex justify-content-between"
                      >
                        <span>SGD</span>
                        <span>144.000</span>
                      </Title>
                    </Col>
                    <Col span={24}>
                      <span>SGD - Singapore Dollar</span>
                    </Col>
                    <Col span={24}>
                      <small>1 USD = 144,000.50 SGD</small>
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <BtnRemove className="d-flex justify-content-center align-items-center">
                    <span>(-)</span>
                  </BtnRemove>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24} style={{ marginTop: "1rem" }}>
            <Button type="primary" block>
              (+) Add Currency
            </Button>
            <Col>
              <AutoComplete
                options={optionsDropdown}
                value={selectedCurrency}
                style={{ width: "100%" }}
                onSelect={onSelect}
              >
                <Input.Search
                  size="middle"
                  placeholder="Select Currency"
                  onClick={() => console.log("lala")}
                />
              </AutoComplete>
            </Col>
          </Col>
        </Row>
      </BodyComponent>
    </FullPage>
  )
}

export default App
