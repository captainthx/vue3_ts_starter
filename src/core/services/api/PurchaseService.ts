import axios from "axios";
import AuthService from "./AuthService";

const url: string = "purchase";
const token = AuthService.getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 5000;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

class PurchaseService {
  async getAll() {
    return await axios.get(url);
  }

  async getByCompany(page: number) {
    return await axios.get(`${url}/company?page=${page}`);
  }

  async getByCompanyAll() {
    return await axios.get(`${url}/company/all`);
  }

  async search(q: string, page: number) {
    return await axios.get(`${url}/search/all?q=${q}&page=${page}`);
  }

  async getOne(id: number) {
    return await axios.get(`${url}/one/${id}`);
  }

  async getByReceipt(receipt: string, page: number) {
    return await axios.get(`${url}/search/receipt/${receipt}?page=${page}`);
  }

  async getByReceiptAll(receipt: string) {
    return await axios.get(`${url}/search/receipt/invoice/${receipt}`);
  }

  async getByStockId(stock_id: string, page: number) {
    return await axios.get(
      `${url}/search/stock/${Number(stock_id)}?page=${page}`
    );
  }

  async getByDate(date: { start_date: string; end_date: string }) {
    return await axios.post(`${url}/date`, date);
  }

  async getStatistics(date: { start_date: string; end_date: string }) {
    return await axios.post(`${url}/statistics`, date);
  }

  async put(data: any) {
    return await axios.post(url, data);
  }

  async update(id: number, data: any) {
    return await axios.patch(`${url}/${id}`, data);
  }

  async delete(id: number) {
    return await axios.delete(`${url}/${id}`);
  }
}

export default new PurchaseService();
