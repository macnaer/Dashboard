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

export const RegisterSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  firstName: Yup.string().max(255).required("First name is required"),
  lastName: Yup.string().max(255).required("Last name is required"),
  password: Yup.string()
    .max(255)
    .required("Password is required")
    .matches(passwordRegEx, "Password must contains A-Z, a-z, 0-9"),
  confirmPassword: Yup.string()
    .max(255)
    .required("Password is required")
    .matches(passwordRegEx, "Password must contains A-Z, a-z, 0-9")
    .oneOf([Yup.ref("password"), null], "Password must match."),
});

export const ChangeProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .label("Email address"),
  name: Yup.string().required("Name is required").label("Name"),
  surname: Yup.string().required("Surname is required").label("Name"),
});
