import axios from "axios";
import AuthService from "./AuthService";

const url: string = "users";
const token = AuthService.getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 5000;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

class UsersService {
  async getByCompany(page: number) {
    return await axios.get(`${url}/all/notme?page=${page}`);
  }

  async getByCompanyAll() {
    return await axios.get(`${url}/company/all`);
  }

  async getByUsername() {
    return await axios.get(`${url}/me`);
  }

  async checkUsername(username: string, identity: string) {
    return await axios.post(`${url}/check`, {
      username,
      identity,
    });
  }

  async getOne(id: number) {
    return await axios.get(`${url}/one/${id}`);
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

  async changePassword(oldPassword: string, newPassword: string) {
    return await axios.patch(`${url}/change/password`, {
      oldPassword,
      newPassword,
    });
  }

  async forgotPassword(username: string, newPassword: string) {
    return await axios.patch(`${url}/forgot/password`, {
      username,
      newPassword,
    });
  }

  async delete(id: number) {
    return await axios.delete(`${url}/${id}`);
  }
}

export default new UsersService();
