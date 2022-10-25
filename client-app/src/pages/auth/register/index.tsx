import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import { RegisterSchema } from "../validation";

const Register: React.FC = () => {
  const [role, setRole] = useState("User");

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    role: "User",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      Name: data.get("firstName"),
      Surname: data.get("lastName"),
      Email: data.get("email"),
      Password: data.get("password"),
      Role: role,
    };
    console.log(newUser);
  };
  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={() => {}}
          >
            {({ errors, touched, isSubmitting, isValid, dirty }) => (
              <Box
                sx={{ my: 3 }}
                component="form"
                noValidate
                onSubmit={handleSubmit}
              >
                <Typography color="textPrimary" variant="h4">
                  Create a new account
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Use your email to create a new account
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  label="First Name"
                  margin="normal"
                  name="firstName"
                  variant="outlined"
                />{" "}
                {errors.firstName && touched.firstName ? (
                  <div style={{ color: "red" }}>{errors.firstName}</div>
                ) : null}
                <Field
                  as={TextField}
                  fullWidth
                  label="Last Name"
                  margin="normal"
                  name="lastName"
                  variant="outlined"
                />
                {errors.lastName && touched.lastName ? (
                  <div style={{ color: "red" }}>{errors.lastName}</div>
                ) : null}
                <Field
                  as={TextField}
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  name="email"
                  type="email"
                  variant="outlined"
                />
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
                <Field
                  as={TextField}
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  variant="outlined"
                />
                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}
                <Field
                  as={TextField}
                  fullWidth
                  label="Confirm password"
                  margin="normal"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                ) : null}
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={role}
                    defaultValue={role}
                    label={role}
                    onChange={handleRoleChange}
                  >
                    <MenuItem value={"User"}>User</MenuItem>
                    <MenuItem value={"Administrator"}>Administrator</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ py: 2 }}>
                  <Button
                    disabled={!(isValid && dirty)}
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {isSubmitting ? "Loadind..." : "  Sign Up Now"}
                  </Button>
                </Box>
              </Box>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
