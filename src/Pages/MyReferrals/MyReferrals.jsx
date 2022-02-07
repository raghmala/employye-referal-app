import AppPage from "../../Components/AppPage/AppPage";
import { ReferredData } from "../../Utils/MockData/ReferredData";
import ReferralsTable from "./ReferralsTable";
import "./MyReferrals.scss";

function MyReferrals() {
  const referrals = ReferredData;
  return (
    <div className="MyReferrals">
      <AppPage title="My Referrals">
        <ReferralsTable referredData={referrals} />
      </AppPage>
    </div>
  );
}

export default MyReferrals;
