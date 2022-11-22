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
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Categories: React.FC = () => {
  const { GetAllCategories } = useActions();
  const { categories } = useTypedSelector((store) => store.CategoryReducer);
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    GetAllCategories();
  }, []);

  const columns: GridColDef[] = [
    { field: "Id", headerName: "Id", width: 100 },
    { field: "Category", headerName: "Category", width: 230 },
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

          const userData = thisRow;
        };

        return <Button onClick={onClick}>Edit</Button>;
      },
    },
  ];

  const rows: any = categories;

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
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categories;
