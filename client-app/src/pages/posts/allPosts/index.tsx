import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/loader";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const GetAllPosts: React.FC = () => {
  const { GetAllPosts } = useActions();
  const { posts, loading } = useTypedSelector((store) => store.PostReducer);

  useEffect(() => {
    GetAllPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const rows = posts.map((post: any) => {
    return (
      <>
        <Button variant="contained">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/dashboard/newPost"
          >
            Add new post
          </Link>
        </Button>
        <Box key={post.id} sx={{ flexGrow: 1, textAlign: "center", mb: 6 }}>
          <Grid item xs={12} sx={{ mb: 2, textAlign: "right" }}></Grid>
          <Card sx={{ width: 800, display: "inline-block" }}>
            <CardMedia
              sx={{ height: 400 }}
              image={post.Image}
              title={post.Title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.ShortDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Box>
      </>
    );
  });

  return rows;
};

export default GetAllPosts;
