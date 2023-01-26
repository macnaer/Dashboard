import * as Yup from "yup";
export const AddPostsSchema = Yup.object().shape({
  Title: Yup.string().required().label("Title"),

  ShortDescription: Yup.string().required().label("ShortDescription"),

  Description: Yup.string().required().label("Description"),

  CategoryId: Yup.string().required().label("CategoryId"),
  Image: Yup.string().label("Image"),
});
