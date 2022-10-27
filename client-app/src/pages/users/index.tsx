import React, { useEffect } from "react";
import Loader from "../../components/loader";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import moment from "moment";
import { Button, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Box, width } from "@mui/system";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "Name", headerName: "Name", width: 230 },
  { field: "Surname", headerName: "Surname", width: 230 },
  { field: "Email", headerName: "Email", width: 230 },
  { field: "Role", headerName: "Role", width: 130 },
  {
    field: "createdAt",

    headerName: "Created At",

    width: 130,

    valueGetter: (params: GridValueGetterParams) =>
      moment(params.row.createdAt).format("ll"),
  },
];

const Users: React.FC = () => {
  const { GetAllUsers } = useActions();
  const { loading, users } = useTypedSelector((store) => store.UserReducer);

  useEffect(() => {
    GetAllUsers();
  }, []);

  const rows = users;
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box sx={{ display: "flex", width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mb: 2, textAlign: "right" }}>
            <Button variant="contained">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard/register"
              >
                Add new user
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ height: "700px" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
};
export default Users;
