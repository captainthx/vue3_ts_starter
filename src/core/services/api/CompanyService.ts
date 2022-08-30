import axios from "axios";
import AuthService from "./AuthService";

const url: string = "company";
const token = AuthService.getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 5000;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

class CompanyService {
  async getOne() {
    return await axios.get(`${url}/one`);
  }
}

export default new CompanyService();
