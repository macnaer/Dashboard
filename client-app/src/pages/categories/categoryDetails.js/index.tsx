import {
  Box,
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
import { Field, Formik } from "formik";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ChangeCategorySchema } from "../validation";

const initialValues = {
  name: "",
  id: "",
};

const CategoryDetails: React.FC = () => {
  const { selectedCategory } = useTypedSelector(
    (store) => store.CategoryReducer
  );

  initialValues.name = selectedCategory.Name;
  const changeCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    console.log("Chnaged name ", name);
  };

  console.log(selectedCategory);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ChangeCategorySchema}
        onSubmit={() => {}}
      >
        {({ errors, touched, isSubmitting, isValid, dirty }) => (
          <Card>
            <Box
              onSubmit={changeCategory}
              component="form"
              noValidate
              style={{ width: "100%" }}
              sx={{ mt: 1 }}
            >
              <CardHeader
                subheader={"The information for editing"}
                title="Category details"
              ></CardHeader>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"Category"}
                      name="name"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    ) : null}
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
export default CategoryDetails;
