import axios from "axios";
import AuthService from "./AuthService";

const url: string = "customers";
const token = AuthService.getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 5000;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

class CustomersService {
  async getOne(id: number) {
    return await axios.get(`${url}/one/${id}`);
  }

  async getByCompany(page: number) {
    return await axios.get(`${url}/company?page=${page}`);
  }

  async getByCompanyAll() {
    return await axios.get(`${url}/company/all`);
  }

  async search(q: string, page: number) {
    return await axios.get(`${url}/search?q=${q}&page=${page}`);
  }

  async put(data: any) {
    await axios.post(url, data);
  }

  async update(id: number, data: any) {
    await axios.patch(`${url}/${id}`, data);
  }

  async delete(id: number) {
    await axios.delete(`${url}/${id}`);
  }
}

export default new CustomersService();
