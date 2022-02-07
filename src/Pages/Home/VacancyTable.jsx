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
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const VacancyTable = (props) => {
  const history = useHistory();
  const [vacancies, setVacancies] = useState(props.vacancies);
  const closeRequirement = (id) => {
    setVacancies(vacancies.filter((row) => row.id !== id));
  };
  return (
    !!vacancies && (
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
              <TableCell align="center">Close Requirement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vacancies.map((row) => (
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
                <TableCell align="center">
                  <DeleteSharpIcon
                    className="refer-del"
                    onClick={() => closeRequirement(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default VacancyTable;
