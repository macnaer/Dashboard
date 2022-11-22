import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/Category",
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

const Category = {
  getAllCategories: () => requests.get(`/allCategories`),
};

export async function getAllCategories() {
  const data = await Category.getAllCategories()
    .then((responce: any) => {
      const { Message, IsSuccess, IsAuth, Errors, Token, Payload } = responce;
      return {
        Message,
        IsSuccess,
        IsAuth,
        Errors,
        Token,
        Payload,
      };
    })
    .catch((error: any) => {
      return error.response.data;
    });
  return data;
}
