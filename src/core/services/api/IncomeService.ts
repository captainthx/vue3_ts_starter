import axios from "axios";
import AuthService from "./AuthService";

const url: string = "income";
const token = AuthService.getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 5000;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

class IncomeService {
  async getAll() {
    return await axios.get(url);
  }

  async getByDateReportIncome(date: { start_date: string; end_date: string }) {
    return await axios.post(`${url}/date/report`, date);
  }

  async getByCompany(page: number) {
    return await axios.get(`${url}/company?page=${page}`);
  }

  async getByCompanyAll() {
    return await axios.get(`${url}/company/all`);
  }

  async getOne(id: number) {
    return await axios.get(`${url}/${id}`);
  }

  async getByDate(data: any) {
    return await axios.post(`${url}/date`, data);
  }

  async getByDateReport(data: any) {
    return await axios.post(`${url}/date/report`, data);
  }

  async getStatistics(date: { start_date: string; end_date: string }) {
    return await axios.post(`${url}/statistics`, date);
  }

  async search(q: string, page: number) {
    return await axios.get(`${url}/search?q=${q}&page=${page}`);
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

export default new IncomeService();
