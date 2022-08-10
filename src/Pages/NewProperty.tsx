import React, { useState } from "react";
import { Box } from "@mui/material";
import Layout from "../UI/Layout";
import CustomStepper from "../Components/CustomStepper";
import UserSelection from "./AddPropertyPages/UserSelection";
import FormLandlord from "./AddPropertyPages/FormLandlord";
import FormRealty from "./AddPropertyPages/FormRealty";
import StatusUpload from "./AddPropertyPages/StatusUpload";
import Reviewing from "./AddPropertyPages/Reviewing";
import MessageSent from "./AddPropertyPages/MessageSent";
import PropertyAdded from "./AddPropertyPages/PropertyAdded";

const steps = ["Property Info", "Status Upload", "Reviewing", "Result"];
export enum UserType {
  Unknown,
  Landlord,
  Realty,
}
const NewProperty: React.FC = (props) => {
  /* when userType is Unknown, go select userTyoe (Landlord or Realty)
   * when userType is defined, render accordingly
   * */
  const [userType, setUserType] = useState<UserType>(UserType.Landlord);
  /* page controls the page depending on which userType we select.
   * same page number with different userType results in different page elements (realtyForm v.s. landlordForm)
   */
  const [page, setPage] = useState(3);

  return (
    <Layout>
      <Box sx={{ minHeight: "100%", pt: 6 }}>
        <CustomStepper active={page} steps={steps} />
        {/*When userType is Unknown, render the user selection page*/}
        {userType === UserType.Unknown && (
          <UserSelection setUserType={setUserType} />
        )}
        {/*Page 0 varies based on userType, render the according form page*/}
        {userType === UserType.Landlord && page === 0 && <FormLandlord />}
        {userType === UserType.Realty && page === 0 && <FormRealty />}
        {page === 1 && <StatusUpload />}
        {userType === UserType.Realty && page === 2 && <MessageSent />}
        {userType === UserType.Landlord && page === 2 && <Reviewing />}
        {page === 3 && <PropertyAdded />}
      </Box>
    </Layout>
  );
};

export default NewProperty;
