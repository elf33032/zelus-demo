import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import FormPage1 from "./AddPropertyPages/FormPage1";
import FormPage2 from "./AddPropertyPages/FormPage2";
import FormPage3 from "./AddPropertyPages/FormPage3";
import Layout from "../UI/Layout";
import { Box } from "@mui/material";
import axios from "axios";

interface IData {
  propertyName: string;
  street: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
  firstName: string;
  lastName: string;
}
interface IFiles {
  passport: File;
  ssn: File;
}
function AddNewProperty() {
  //navigate between pages without url routing
  const [page, setPage] = useState(1);
  //json data
  const [data, setData] = useState<IData>({
    propertyName: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    firstName: "",
    lastName: "",
  });
  //picture files
  const [files, setFiles] = useState<IFiles>();

  function nextHandler(newVal: IData) {
    axios
      .post("http://localhost:1337/api/properties", {
        data: {
          PropertyName: newVal.propertyName,
          Address: {
            Street: newVal.street,
            Apt: newVal.apt,
            City: newVal.city,
            State: newVal.state,
            ZIP: newVal.zip,
          },
          FirstName: newVal.firstName,
          LastName: newVal.lastName,
        },
      })
      .then(function (response) {
        console.log(response.data);
      });
    setData(newVal);
    setPage(page + 1);
  }
  function updateFilesHandler(file: Partial<IFiles>) {
    setFiles((prevState) => ({ ...prevState, ...file } as IFiles));
  }
  function submitDataHandler() {
    // Send HTML POST to Firebase realtime DB api
    axios.post(
      "https://zelus-test-default-rtdb.firebaseio.com/userInfo.json",
      JSON.stringify(data)
    );
    // Upload files into Firebase Storage
    // Into sub-folder of /images/[first name].[last name]/
    let file: keyof IFiles;
    for (file in files) {
      if (files) {
        // Upload your file here //
      }
    }
    //Go to the final page
    setPage(page + 1);
  }
  function prevPage() {
    setPage(page - 1);
  }
  return (
    <Box>
      <Layout>
        <Box>
          {page === 1 && <FormPage1 onNext={nextHandler} />}
          {page === 2 && <FormPage2 next={submitDataHandler} back={prevPage} />}
          {page === 3 && <FormPage3 />}
        </Box>
      </Layout>
    </Box>
  );
}
export default AddNewProperty;
export type { IData };
export type { IFiles };
