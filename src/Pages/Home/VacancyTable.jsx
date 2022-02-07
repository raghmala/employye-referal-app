import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const VacancyTable = (props) => {
  const history = useHistory();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell>SF_ATS</TableCell>
            <TableCell>Practice</TableCell>
            <TableCell>Job Category</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>No of Openings</TableCell>
            <TableCell>Experience</TableCell>
            <TableCell>Center</TableCell>
            <TableCell>Refer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.vacancies.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.SF_ATS}</TableCell>
              <TableCell>{row.Practice}</TableCell>
              <TableCell>{row.Job_Category}</TableCell>
              <TableCell>{row.Skills}</TableCell>
              <TableCell>{row.No_of_Openings}</TableCell>
              <TableCell>{row.Exp}</TableCell>
              <TableCell>{row.Center}</TableCell>
              <TableCell>
                <Link
                  className="refer-link"
                  onClick={() => {
                    history.push("refer/" + row.id);
                  }}
                >
                  Refer
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VacancyTable;
