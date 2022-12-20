import { Box, Button, Grid } from "@mui/material";
import {
  DataGrid,
  GridApi,
  GridCellValue,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Loader from "../../../components/loader";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Categories: React.FC = () => {
  const { GetAllCategories, SelectedCategory } = useActions();
  const { categories, loading } = useTypedSelector(
    (store) => store.CategoryReducer
  );
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    GetAllCategories();
  }, []);

  const columns: GridColDef[] = [
    { field: "Name", headerName: "Category", width: 230 },
    {
      field: "createdAt",

      headerName: "Created At",

      width: 130,

      valueGetter: (params: GridValueGetterParams) =>
        moment(params.row.createdAt).format("ll"),
    },
    {
      field: "id",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          const categoryData = thisRow;
          EditCategory(categoryData);
          setIsRedirect(true);
        };

        return <Button onClick={onClick}>Edit</Button>;
      },
    },
  ];

  const EditCategory = (category: any) => {
    SelectedCategory(category);
  };

  const rows = categories;

  if (loading) {
    return <Loader />;
  }

  if (isRedirect) {
    return <Navigate to="/dashboard/categoryDetails" />;
  }

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mb: 2, textAlign: "right" }}>
          <Button variant="contained">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard/newCategory"
            >
              Add new category
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ height: "700px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categories;
