import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, Formik } from "formik";
import React from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ChangeProfileSchema } from "../validation";

const initialProfileValues = {
  name: "",
  surname: "",
  email: "",
  role: "",
};

const UserDetails: React.FC = () => {
  const { selectedUser } = useTypedSelector((store) => store.UserReducer);
  const { UpdateUserProfile } = useActions();
  initialProfileValues.name = selectedUser.Name;
  initialProfileValues.surname = selectedUser.Surname;
  initialProfileValues.email = selectedUser.Email;
  initialProfileValues.role = selectedUser.Role;

  const changeProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");
    const role = data.get("role");

    const updatedUser = {
      id: selectedUser.id,
      name,
      surname,
      email,
      role,
    };
    console.log(updatedUser);
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
                title="User details"
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
                    <FormControl sx={{ width: "100%" }}>
                      <Field
                        as={Select}
                        fullWidth
                        label="Role"
                        name="role"
                        variant="outlined"
                      >
                        <MenuItem value={"User"}>User</MenuItem>
                        <MenuItem value={"Administrator"}>
                          Administrator
                        </MenuItem>
                      </Field>
                    </FormControl>
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
    </>
  );
};
export default UserDetails;
