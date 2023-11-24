import axios from "axios";
export default class API {
  constructor() {
    this.api_token = localStorage.getItem("token");
    this.client = null;
    this.api_url = process.env.REACT_APP_URL;
  }

  init = () => {
    this.api_token = localStorage.getItem("token");

    let headers = {
      Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      //timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  setToken(token) {
    localStorage.setItem("token", token);
  }
  removeToken() {
    localStorage.removeItem("token");
  }
  auth = async (data) => {
    const result = await this.init()
      .post("user/auth", data)
      .then((resp) => {
        return resp.data;
      })
      .catch((ex) => {
        localStorage.removeItem("token");
      });
    if (result?.status === 200) this.setToken(result.user.user.token);
    return result;
  };
  logout = () => {
    this.removeToken();
  };
  apiData = async (method = "get", url, data) => {
    try {
      if (method === "post") {
        const result = await this.init()
          .post(url, data)
          .then((resp) => {
            return resp.data;
          })
          .catch((ex) => {
            
            return ex?.response?.data;

          });
        return result;
      } else {
        const result = await this.init()
          .get(url, data)
          .then((resp) => {
            return resp.data;
          })
          .catch((ex) => {
            return ex?.response?.data;
          })
        return result;
      }
    } catch (err) {
      //console.log(err)
    }
  };
  getUserList = (params) => {
    return this.init().get("/users", { params: params });
  };

  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
}
