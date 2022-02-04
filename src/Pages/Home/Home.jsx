import React from "react";
import AppPage from "../../Components/AppPage/AppPage";
import { DataGrid } from "@material-ui/data-grid";
import { Vacancies } from "../../Utils/MockData/Vacancies";

const columns = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "SF_ATS", headerName: "SF_ATS", width: 170 },
  { field: "Practice", headerName: "Practice", width: 170 },
  { field: "Job_Category", headerName: "Job Category", width: 170 },
  { field: "Skills", headerName: "Skills", width: 170 },
  { field: "No_of_Openings", headerName: "No of Openings", width: 170 },
  { field: "Exp", headerName: "Experience", width: 170 },
  { field: "Center", headerName: "Location", width: 170 },
  { field: "JD", headerName: "Job_Description", width: 170 },
  { field: "Refer", headerName: "Refer", width: 170 },
];

const rows = Vacancies.map((row) => ({ ...row, Refer: <a>Link</a> }));

function Home() {
  return (
    <div className="App">
      <AppPage>
        <h1>Home_.....!</h1>
        <div style={{ height: 500 }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </AppPage>
    </div>
  );
}

export default Home;
