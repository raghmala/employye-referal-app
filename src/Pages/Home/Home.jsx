import React, { useState } from "react";
import AppPage from "../../Components/AppPage/AppPage";
import { Vacancies } from "../../Utils/MockData/Vacancies";
import VacancyTable from "./VacancyTable";
import "./Home.scss";
import AddIcon from "@mui/icons-material/Add";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Fab,
} from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const vacancies = Vacancies;
  const skills = [...vacancies];
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const handleSkillsChange = (event) => {
    setSkill(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  const history = useHistory();
  return (
    <div className="home">
      <AppPage title={"Home"}>
        <div className="home__filter-div">
          <div className="home__filter-div-skills">
            <FormControl fullWidth>
              <InputLabel id="skills-lbl">Skills</InputLabel>
              <Select
                labelId="skills-lbl"
                id="skills-select"
                value={skill ? skill : ""}
                label="Skills"
                onChange={(event) => handleSkillsChange(event)}
              >
                {skills.map((vacancy) => (
                  <MenuItem id="vacancy.id">{vacancy.Skills}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="home__filter-div-location">
            <FormControl fullWidth>
              <InputLabel id="location-lbl">Location</InputLabel>
              <Select
                labelId="location-lbl"
                id="location-select"
                value={location ? location : ""}
                label="Location"
                onChange={handleLocationChange}
              >
                <MenuItem>{"Hyderabad"}</MenuItem>
                <MenuItem>{"Bangalore"}</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="home__filter-div-exp">
            <FormControl fullWidth>
              <InputLabel id="experience-lbl">Experience</InputLabel>
              <Select
                labelId="experience-lbl"
                id="experience-select"
                value={experience ? experience : ""}
                label="Experience"
                onChange={handleExperienceChange}
              >
                <MenuItem>{"0 - 3"}</MenuItem>
                <MenuItem>{"3 - 5"}</MenuItem>
                <MenuItem>{"5 - 8"}</MenuItem>
                <MenuItem>{"> 8"}</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button>Search</Button>
        </div>
        <VacancyTable vacancies={vacancies} />
        <div className="home-footer">
          <Fab
            className="add-button"
            color="primary"
            aria-label="add"
            onClick={() => history.push("/addNewOpening")}
          >
            <AddIcon />
          </Fab>
        </div>
      </AppPage>
    </div>
  );
}

export default Home;
