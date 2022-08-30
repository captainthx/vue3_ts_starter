import { TOKEN } from "../../../types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import router from "../../../router";
import { store } from "../../../store";

async function checkExpirationDate(token: string): Promise<number> {
  let duration: number = 0;

  await axios
    .get("company/one", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const package_end = new Date(res.data.package_end).getTime();
      const today = new Date().getTime();

      duration = package_end - (today + 25200000);
    });

  return duration;
}

async function loginUser(username: string, password: string): Promise<any> {
  let result: any;
  await axios
    .post("auth/login", {
      username: username,
      password: password,
    })
    .then(async (res) => {
      result = res.data;
      const user: TOKEN = await jwt_decode(result.access_token);
      store.dispatch("saveUser", {
        username: user.username,
        name: user.name,
        role: user.role,
      });
    })
    .catch((err) => {
      result = err;
    });

  if (result.access_token) {
    localStorage.setItem("tk", result.access_token);
    checkExpirationDate(result.access_token).then((res) => {
      if (res <= 0) {
        alert("package หมดอายุ");
      } else {
        router.push("/manages/home");
      }
    });
  }
  return result;
}

function isUserLoggedIn(): boolean {
  return localStorage.getItem("tk")?.toString() !== undefined;
}

function logoutUser(): void {
  if (isUserLoggedIn()) {
    localStorage.removeItem("tk");
    localStorage.removeItem("user");
    window.location.href = "/";
  }
}

function getAccessToken(): string | undefined {
  return localStorage.getItem("tk")?.toString();
}

async function validateToken(token: string | undefined) {
  const res = await axios.post("auth/verify", {
    access_token: token,
  });
  return res.data;
}

function decodeJwt() {
  const token = localStorage.getItem("tk")?.toString();
  let decoded: TOKEN;
  decoded = {
    id: 0,
    username: "",
    name: "",
    company: 0,
    role: "",
  };
  if (token) {
    decoded = jwt_decode(token);
  }
  return decoded;
}

export default {
  loginUser,
  isUserLoggedIn,
  logoutUser,
  getAccessToken,
  validateToken,
  checkExpirationDate,
  decodeJwt,
};
