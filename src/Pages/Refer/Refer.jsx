import { Button, Input, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import AppPage from "../../Components/AppPage/AppPage";
import { ReferredData } from "../../Utils/MockData/ReferredData";
import { Vacancies } from "../../Utils/MockData/Vacancies";
import "./Refer.scss";

function Refer() {
  let { vacancyId } = useParams();
  const vacancies = Vacancies;
  const vacancy = vacancies.filter((data) => data.id === +vacancyId)[0];
  const jd = vacancy.JD.split(" • ");
  const history = useHistory();
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");

  const addReferData = () => {
    // const referData = JSON.parse(JSON.stringify(vacancy));
    let referData = {};
    referData.name = name;
    referData.email = email;
    referData.num = num;
    referData.status = "Under Review";
    referData.id = ReferredData.length + 1;
    referData.hr = "";
    referData.Practice = vacancy.Practice;
    referData.Job_Category = vacancy.Job_Category;
    referData.Skills = vacancy.Skills;
    console.log(referData);
    ReferredData.push(referData);
    history.push("/myReferrals");
  };

  return (
    <div className="refer">
      <AppPage title="Get Your Buddy">
        <div className="refer--jd-div">
          <div className="refer--jd-div-grp">
            <div className="refer--jd-div-grp-item">
              <h2>SF ATS</h2>
              <p>{vacancy.SF_ATS}</p>
            </div>
            <div className="refer--jd-div-grp-item">
              <h2>Practice</h2>
              <p>{vacancy.Practice}</p>
            </div>
            <div className="refer--jd-div-grp-item">
              <h2>Job Category</h2>
              <p>{vacancy.Job_Category}</p>
            </div>
            <div className="refer--jd-div-grp-item">
              <h2>Skills</h2>
              <p>{vacancy.Skills}</p>
            </div>
            <div className="refer--jd-div-grp-item">
              <h2>No of Openings</h2>
              <p>{vacancy.No_of_Openings}</p>
            </div>
            <div className="refer--jd-div-grp-item">
              <h2>Experience</h2>
              <p>{vacancy.Exp}</p>
            </div>
          </div>
          <div>
            <h2>Job Description</h2>
            {jd.map((line) => (
              <p key={line}>• {line}</p>
            ))}
          </div>
          <div className="refer--jd-div__profile">
            <div className="refer--jd-div__profile-item">
              <TextField
                id="refer--jd-div__profile-name"
                label="Candidate Name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="refer--jd-div__profile-item">
              <TextField
                type="number"
                label="Candidate Number"
                id="refer--jd-div__profile-num"
                onChange={(event) => setNum(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="refer--jd-div__profile-item">
              <TextField
                id="refer--jd-div__profile-email"
                label="Email"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="refer--jd-div__profile-attach">
              <Input type="file" />
            </div>
          </div>
          <div className="refer-submit">
            <Button variant="contained" onClick={() => addReferData()}>
              SUBMIT
            </Button>
          </div>
        </div>
      </AppPage>
    </div>
  );
}

export default Refer;
