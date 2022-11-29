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
  updateCategory: (name: any) => requests.post(`/updateCategory`, name),
};

export async function updateCategory(name: any) {
  const data = await Category.updateCategory(name)
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

export function setSelectedCategory(category: any) {
  category = JSON.stringify(category);
  window.localStorage.setItem("selectedCategory", category);
}

export function getSelectedCategory() {
  let selectedCategory: any = window.localStorage.getItem("selectedCategory");
  selectedCategory = JSON.parse(selectedCategory);
  return selectedCategory;
}

export function removeSelectedCategory() {
  window.localStorage.removeItem("selectedCategory");
}
