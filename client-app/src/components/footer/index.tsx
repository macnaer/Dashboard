import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC<any> = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="#">Dashboard</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
