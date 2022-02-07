import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const ReferralsTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Practice</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Concerned HR</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.referredData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.num}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.Practice}</TableCell>
              <TableCell>{row.Job_Category}</TableCell>
              <TableCell>{row.Skills}</TableCell>
              <TableCell>{row.hr}</TableCell>
              <TableCell>
                <span
                  className={
                    "referred-status" +
                    (row.status !== "In Progress"
                      ? row.status !== "Selected"
                        ? row.status !== "Declined"
                          ? ""
                          : "-declined"
                        : "-selected"
                      : "-inProgress")
                  }
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReferralsTable;
