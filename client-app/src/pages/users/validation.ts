import * as Yup from "yup";

export const ChangeProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .label("Email address"),
  name: Yup.string().required("Name is required").label("Name"),
  surname: Yup.string().required("Surname is required").label("Name"),
  role: Yup.string().required("Role is required").label("Role"),
});
