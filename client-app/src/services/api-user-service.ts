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
  getAllUsers: () => requests.get(`/users`),
  register: (user: any) => requests.post(`/register`, user),
  updateProfile: (user: any) => requests.post(`/updateProfile`, user),
  updateUser: (user: any) => requests.post(`/updateUser`, user),
  changePassword: (passwords: any) =>
    requests.post(`/changePassword`, passwords),
};

export async function changePassword(passwords: any) {
  const data = await User.changePassword(passwords)
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

export async function updateProfile(user: any) {
  const data = await User.updateProfile(user)
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

export async function updateUser(user: any) {
  const data = await User.updateUser(user)
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

export async function getAllUsers() {
  const data = await User.getAllUsers()
    .then((responce: any) => {
      const { Message, IsSuccess, Payload } = responce;
      return {
        Message,
        IsSuccess,
        Payload,
      };
    })
    .catch((error: any) => {
      return error.response.data;
    });
  return data;
}

export async function register(user: any) {
  const data = await User.register(user)
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

export function setAccessToken(token: string) {
  window.localStorage.setItem("accessToken", token);
}

export function getAccessToken(): null | string {
  const token = window.localStorage.getItem("accessToken");
  return token;
}

export function removeAccessToken(): void {
  window.localStorage.removeItem("accessToken");
}

export function setSelectedUser(user: any) {
  user = JSON.stringify(user);
  window.localStorage.setItem("selectedUser", user);
}

export function getSelectedUser() {
  let selectedUser: any = window.localStorage.getItem("selectedUser");
  selectedUser = JSON.parse(selectedUser);
  return selectedUser;
}

export function removeSelectedUser() {
  window.localStorage.removeItem("selectedUser");
}
