import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik, Field, Form } from "formik";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { AddPostsSchema } from "./auth/PostValidation";
import { Navigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FormikControl from "./FormikControl";

const initialValues: any = {
  Title: "",
  ShortDescription: "",
  Description: "",
  CategoryId: "",
  Image: "",
};

interface FormValues {
  Title: string;
  ShortDescription: string;
  Description: string;
  CategoryId: string;
  Image: string;
}

const AddNewPost: any = () => {
  const { categories } = useTypedSelector((store) => store.CategoryReducer);

  const store = useTypedSelector((store) => store.PostReducer);

  const { loading } = store;

  const [isRedirect, SetIsRedirect] = useState(false);
  const [image, SetImage] = useState("");

  const { GetAllCategories, AddNewPosts } = useActions();

  React.useEffect(() => {
    GetAllCategories();
  }, []);

  const handleSubmit = async (values: FormValues) => {
    const newArticle = {
      Title: values.Title,

      ShortDescription: values.ShortDescription,

      Description: values.Description,

      CategoryId: values.CategoryId,

      Image: image,
    };

    console.log("newArticle ", newArticle);
    AddNewPosts(newArticle);
    SetIsRedirect(true);
  };

  const getImage = async (e: any) => {
    const img = e.target.files ? e.target.files[0] : null;
    if (img !== null) {
      const convertedImage: any = await convertToBase64(img);
      SetImage(convertedImage);
    }
  };

  const convertToBase64 = (image: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  if (isRedirect) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add new Post
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={AddPostsSchema}
          validateOnBlur={false}
        >
          {({ errors, touched, isValid, handleChange, values }) => (
            <Box style={{ width: "100%" }} component={Form} sx={{ mt: 1 }}>
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                label="Title"
                name="Title"
                variant="standard"
              />
              {/* {errors.Title && touched.Title ? (
                <div style={{ color: "red" }}>{errors.Title}</div>
              ) : null} */}
              <FormikControl
                label="ShortDescription"
                name="ShortDescription"
                control="tiny-mce"
              />
              {/* {errors.ShortDescription && touched.ShortDescription ? (
                <div style={{ color: "red" }}>{errors.ShortDescription}</div>
              ) : null} */}

              <FormikControl
                label="Description"
                name="Description"
                control="tiny-mce"
              />
              {/* {errors.Description && touched.Description ? (
                <div style={{ color: "red" }}>{errors.Description}</div>
              ) : null} */}

              {/* <Field
                type="file"
                margin="normal"
                fullWidth
                label="Image URL"
                name="Image"
                style={{ width: "100%" }}
                variant="standard"
              /> */}
              <input
                style={{ display: "none" }}
                id="raised-button-file"
                name="Image"
                type="file"
                onChange={getImage}
              />
              <label htmlFor="raised-button-file">
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  name="CategoryId"
                  onChange={handleChange}
                  label="Category"
                >
                  {categories.map((item: any) => {
                    return (
                      <MenuItem id={item.id} value={item.id}>
                        {item.Name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <Button
                disabled={!isValid}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? "Add" : "Loading..."}
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
export default AddNewPost;
