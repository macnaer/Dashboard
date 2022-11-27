import * as Yup from "yup";

export const ChangeCategorySchema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
});
