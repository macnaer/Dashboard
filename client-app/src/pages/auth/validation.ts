import * as Yup from "yup";

const passwordRegEx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,}$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required.")
    .label("Email address."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required.")
    .matches(passwordRegEx, "Password must contains A-Z, a-z, 0-9")
    .label("Password"),
});
