import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Input,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import AppPage from "../../Components/AppPage/AppPage";
import { Vacancies } from "../../Utils/MockData/Vacancies";
import Grid from "@material-ui/core/Grid";
import "./Admin.scss";

function Admin() {
  let { vacancyId } = useParams();
  const vacancies = Vacancies;
  const vacancy = vacancies.filter((data) => data.id === +vacancyId)[0];
  const locations = [...vacancies];
  const history = useHistory();
  const [sf_ats, setSf_ats] = useState("");
  const [practice, setPractice] = useState("");
  const [job_category, setJob_category] = useState("");
  const [skills, setSkills] = useState("");
  const [no_of_openings, setNo_of_openings] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [job_desciption, setJob_desciption] = useState("");
  const [email, setEmail] = useState("");
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const addAdminData = () => {
    // const referData = JSON.parse(JSON.stringify(vacancy));

    let adminData = {};
    adminData.id = Vacancies.length + 1;
    adminData.SF_ATS = sf_ats;
    adminData.email = email;
    adminData.Practice = practice;
    adminData.Skills = skills;
    adminData.Job_Category = job_category;
    adminData.No_of_Openings = no_of_openings;
    adminData.Exp = experience;
    adminData.Center = location;
    adminData.JD = job_desciption;
    console.log(adminData);
    Vacancies.push(adminData);
    history.push("/home");
  };

  return (
    <div className="refer">
      <AppPage title="Get Your Buddy">
        <div className="admin-entries--jd-div">
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <div className="admin_sf_ats--jd-div">
                <InputLabel id="location-lbl">SF/ATS name </InputLabel>
                <TextField
                  id="admin_st_ats_practice_item"
                  variant="outlined"
                  value={sf_ats}
                  onChange={(event) => setSf_ats(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="admin_practice--jd-div">
                <InputLabel id="location-lbl">Practice name </InputLabel>
                <TextField
                  id="admin_practice_item"
                  variant="outlined"
                  value={practice}
                  onChange={(event) => setPractice(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="admin_job_catogory--jd-div">
                <InputLabel id="location-lbl">Job Category </InputLabel>
                <TextField
                  id="admin_job_catogory_item"
                  variant="outlined"
                  value={job_category}
                  onChange={(event) => setJob_category(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="admin_skills--jd-div">
                <InputLabel id="location-lbl">Skill Set </InputLabel>
                <TextField
                  id="admin_skills_item"
                  variant="outlined"
                  value={skills}
                  onChange={(event) => setSkills(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="admin_count_of_openings--jd-div">
                <InputLabel id="location-lbl">No of Openings </InputLabel>
                <TextField
                  id="admin_openings_count_item"
                  variant="outlined"
                  value={no_of_openings}
                  onChange={(event) => setNo_of_openings(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="admin_experience--jd-div">
                <InputLabel id="location-lbl">Total Experience </InputLabel>
                <TextField
                  id="admin_experience_item"
                  variant="outlined"
                  value={experience}
                  onChange={(event) => setExperience(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="home__filter-location--jd-div">
                <InputLabel id="location-lbl">Location </InputLabel>
                <FormControl fullWidth>
                  <InputLabel id="location-lbl">Location</InputLabel>
                  <Select
                    labelId="location-lbl"
                    id="location-select"
                    value={location ? location : ""}
                    label="Location"
                    onChange={(event) => handleLocationChange(event)}
                  >
                    {locations.map((vacancy) => (
                      <MenuItem id="vacancy.id">{vacancy.Center}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="admin_email--jd-div">
                <InputLabel id="location-lbl">Email</InputLabel>
                <TextField
                  id="admin_email_item"
                  type="String"
                  label="HR Department Email"
                  variant="outlined"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="admin_jd--jd-div">
                <InputLabel id="location-lbl">Job Description</InputLabel>
                <TextField
                  id="admin_jd_item"
                  label="Job Description"
                  variant="outlined"
                  value={job_desciption}
                  onChange={(event) => setJob_desciption(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="refer--jd-div__profile-attach">
                <Input type="file" />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="refer-submit">
          <Button variant="contained" onClick={() => addAdminData()}>
            SUBMIT
          </Button>
        </div>
      </AppPage>
    </div>
  );
}

export default Admin;
