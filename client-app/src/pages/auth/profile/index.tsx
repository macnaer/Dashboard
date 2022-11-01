import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, Formik } from "formik";
import React from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
  ChangeProfilePasswordSchema,
  ChangeProfileSchema,
} from "../validation";

const initialProfileValues = {
  name: "",
  surname: "",
  email: "",
  role: "",
};

const changePasswordValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const Profile: React.FC = () => {
  const { user } = useTypedSelector((store) => store.UserReducer);
  const { UpdateUserProfile, ChangePassword } = useActions();
  initialProfileValues.name = user.Name;
  initialProfileValues.surname = user.Surname;
  initialProfileValues.email = user.Email;
  initialProfileValues.role = user.Role;

  const changeProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");

    const updatedUser = {
      id: user.id,
      name,
      surname,
      email,
    };
    UpdateUserProfile(updatedUser);
  };

  const changeProfilePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const oldPassword = data.get("oldPassword");
    const newPassword = data.get("newPassword");
    const confirmPassword = data.get("confirmPassword");

    const updatedUserPassword = {
      id: user.id,
      oldPassword,
      newPassword,
      confirmPassword,
    };
    ChangePassword(updatedUserPassword);
  };

  return (
    <>
      <Formik
        validationSchema={ChangeProfileSchema}
        initialValues={initialProfileValues}
        onSubmit={() => {}}
      >
        {({ errors, touched, isSubmitting, isValid, dirty }) => (
          <Card>
            <Box
              onSubmit={changeProfile}
              component="form"
              noValidate
              style={{ width: "100%" }}
              sx={{ mt: 1 }}
            >
              <CardHeader
                subheader={"The information for editing"}
                title="Profile"
              ></CardHeader>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"First name"}
                      name="name"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    ) : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"Second name"}
                      name="surname"
                      variant="outlined"
                    />{" "}
                    {errors.surname && touched.surname ? (
                      <div style={{ color: "red" }}>{errors.surname}</div>
                    ) : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"Email"}
                      name="email"
                      variant="outlined"
                    />
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"Role"}
                      name="role"
                      disabled
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <Button
                  disabled={!(isValid && dirty)}
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  Save datails
                </Button>
              </Box>
            </Box>
          </Card>
        )}
      </Formik>
      <Formik
        validationSchema={ChangeProfilePasswordSchema}
        initialValues={changePasswordValues}
        onSubmit={() => {}}
      >
        {({ errors, touched, isSubmitting, isValid, dirty }) => (
          <Card>
            <Box
              onSubmit={changeProfilePassword}
              component="form"
              noValidate
              style={{ width: "100%" }}
              sx={{ mt: 1 }}
            >
              <CardHeader
                subheader={"Set new profile password"}
                title="Change profile password"
              ></CardHeader>
              <CardContent>
                <Grid item>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Old password"
                    name="oldPassword"
                    type="password"
                    variant="outlined"
                  />
                  {errors.oldPassword && touched.oldPassword ? (
                    <div style={{ color: "red" }}>{errors.oldPassword}</div>
                  ) : null}
                </Grid>
                <Grid item sx={{ mt: 1 }}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="New password"
                    name="newPassword"
                    type="password"
                    variant="outlined"
                  />
                  {errors.newPassword && touched.newPassword ? (
                    <div style={{ color: "red" }}>{errors.newPassword}</div>
                  ) : null}
                </Grid>
                <Grid item sx={{ mt: 1 }}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Confirm  password"
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                  ) : null}
                </Grid>
              </CardContent>
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <Button
                  disabled={!(isValid && dirty)}
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  Change password
                </Button>
              </Box>
            </Box>
          </Card>
        )}
      </Formik>
    </>
  );
};
export default Profile;
