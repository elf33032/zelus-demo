import React from "react";
import { Box, Button } from "@mui/material";
import UnitStats from "../../Components/UnitStats";
import { useNavigate } from "react-router-dom";
import UnitTable from "../../Components/UnitTable";

interface ManagePage1Props {
  propertyId: number;
  setPage: Function;
}

const ManagePage1: React.FC<ManagePage1Props> = (props) => {
  let navigate = useNavigate();
  const backHandler = () => {
    props.setPage(0);
    navigate("./");
  };
  return (
    <Box>
      <UnitStats propertyId={props.propertyId} />
      <UnitTable propertyId={props.propertyId} />
      <Button
        onClick={(e) => {
          backHandler();
        }}
      >
        Back
      </Button>
    </Box>
  );
};
export default ManagePage1;
