import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/Post",
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

const Post = {
  getAllPosts: () => requests.get(`/getAllPosts`),
  addNewPost: (newPost: any) => requests.post(`/createPost`, newPost),
};

export async function getAllPosts() {
  const data = await Post.getAllPosts()
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

export async function addNewPost(newPost: any) {
  const data = await Post.addNewPost(newPost)
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
