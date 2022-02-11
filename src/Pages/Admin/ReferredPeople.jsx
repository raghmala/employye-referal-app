import React from "react";
import AppPage from "../../Components/AppPage/AppPage";
import { ReferredPeopleData } from "../../Utils/MockData/ReferredPeopleData";
import ReferredPeopleTable from "./ReferredPeopleTable";
import "./Admin.scss";

function ReferredPeople() {
  return (
    <AppPage title="Referred People">
      <ReferredPeopleTable referredPeopleData={ReferredPeopleData} />
    </AppPage>
  );
}

export default ReferredPeople;
