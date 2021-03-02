import styled from "styled-components"
import { Layout } from "antd"

export const HeaderComponent = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  border-bottom: 1px solid gray;
`

export const BaseCurrencyInput = styled.input`
  text-align: right;
`

export const BodyComponent = styled.div`
  padding: 1rem;
`

export const BtnRemove = styled.div`
  margin-left: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
  height: 100%;
  width: 100%;
`

export const FullPage = styled(Layout)`
  min-height: 100vh;
`
