import axios from "axios";
import AuthService from "./AuthService";

const url: string = "stock_id";
const token = AuthService.getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 5000;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

class StockService {
  async getByCompanyAll() {
    return await axios.get(`${url}/company/all`);
  }

  async put(stock_id: number) {
    return await axios.post(url, { stock_id: Number(stock_id) });
  }
}

export default new StockService();
