import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface CustomStepperProps {
  active: number;
  steps: string[];
}
const CustomStepper: React.FC<CustomStepperProps> = (props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.active} alternativeLabel>
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;
