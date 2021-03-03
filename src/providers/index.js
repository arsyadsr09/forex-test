import { notification } from "antd"
import axios from "axios"
import { API_URL } from "../config/config"

export const getForexLatest = async () => {
  try {
    const ops = {
      method: "GET",
      url: API_URL + "/latest?base=USD",
    }

    const response = await axios(ops)
    return response.data
  } catch (err) {
    notification.error({
      message: "Server Error",
      description: `Error fetch data from server. error: ${err}`,
    })
  }
}
