import {
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import logo from "../../Utils/Images/LinkedIn_logo_initials.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const VacancyTable = (props) => {
  const history = useHistory();
  const [vacancies, setVacancies] = useState(props.vacancies);
  const [closeRequirement, setCloseRequirement] = useState("");
  const closeRequirementChange = (event) => {
    setCloseRequirement(event.target.value);
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
              <TableCell>Share</TableCell>
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
                  <FormControl fullWidth>
                    <InputLabel id="close-lbl">Closed Status</InputLabel>
                    <Select
                      labelId="close-lbl"
                      id="close-select"
                      value={closeRequirement ? closeRequirement : ""}
                      label="Location"
                      onChange={closeRequirementChange}
                    >
                      <MenuItem>{"Filled By Employee Referral"}</MenuItem>
                      <MenuItem>{"Closed"}</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <img src={logo} width="30" height="30" />
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
