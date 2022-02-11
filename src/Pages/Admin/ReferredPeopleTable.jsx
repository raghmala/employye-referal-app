import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

const ReferredPeopleTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell>ATS-ID</TableCell>
            <TableCell>Candidate Name</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Practice</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Referred By</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.referredPeopleData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.SF_ATS}</TableCell>
              <TableCell>{row.candidateName}</TableCell>
              <TableCell>{row.num}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.Practice}</TableCell>
              <TableCell>{row.Job_Category}</TableCell>
              <TableCell>{row.Skills}</TableCell>
              <TableCell>{row.referredBy}</TableCell>
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
                <EditIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReferredPeopleTable;
