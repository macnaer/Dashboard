import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { ChangeCategorySchema } from "../validation";

const NewCategory: React.FC = () => {
  const { CreateCategory } = useActions();
  const [isRedirect, setIsRedirect] = useState(false);

  const initialValues = {
    name: "",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newCategory = {
      Name: data.get("name"),
    };
    CreateCategory(newCategory);
    setIsRedirect(true);
  };

  if (isRedirect) {
    return <Navigate to="/dashboard/categories" />;
  }

  return (
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
          validationSchema={ChangeCategorySchema}
          onSubmit={() => {}}
        >
          {({ errors, touched, isSubmitting, isValid, dirty }) => (
            <Box
              sx={{ my: 3 }}
              component="form"
              noValidate
              onSubmit={handleSubmit}
            >
              <Field
                as={TextField}
                fullWidth
                label="Category Name"
                margin="normal"
                name="name"
              />{" "}
              {errors.name && touched.name ? (
                <div style={{ color: "red" }}>{errors.name}</div>
              ) : null}
              <Box sx={{ py: 2 }}>
                <Button
                  disabled={!(isValid && dirty)}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  {isSubmitting ? "Loadind..." : " Save category"}
                </Button>
              </Box>
            </Box>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default NewCategory;
