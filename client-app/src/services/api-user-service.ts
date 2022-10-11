import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/User",
  headers: {
    "Contant-Type": "application/json",
  },
});

const responceBody: any = (responce: any) => responce.data;

const requests = {
  get: (url: string) => instance.get(url).then().then(responceBody),
  post: (url: string, body?: any) =>
    instance.post(url, body).then().then(responceBody),
};

const User = {
  login: (user: any) => requests.post(`/login`, user),
};

export async function login(user: any) {
  const data = await User.login(user)
    .then((responce: any) => {
      const { Message, IsSuccess, IsAuth, Errors, Token } = responce;
      return {
        Message,
        IsSuccess,
        IsAuth,
        Errors,
        Token,
      };
    })
    .catch((error: any) => {
      return error.response.data;
    });
  return data;
}
