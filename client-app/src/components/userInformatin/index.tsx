import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function createData(
  Name: string,
  Surname: string,
  Email: string,
  Role: string
) {
  return { Name, Surname, Email, Role };
}

const UserInformation: React.FC = () => {
  const { user } = useTypedSelector((store) => store.UserReducer);
  const rows = [createData(user.Name, user.Surname, user.Email, user.Role)];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Surname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.Name}
              </TableCell>
              <TableCell align="center">{row.Surname}</TableCell>
              <TableCell align="center">{row.Email}</TableCell>
              <TableCell align="center">{row.Role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserInformation;
