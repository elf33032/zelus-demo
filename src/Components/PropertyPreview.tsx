import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface propertyPreviewProps {
  name: string;
  address: string;
  owner: string;
  enrollTime: string;
  propertyId: number;
  setPage: Function;
  setProperty: Function;
}
const PropertyPreview: React.FC<propertyPreviewProps> = (props) => {
  let time = new Date(props.enrollTime);
  let navigate = useNavigate();
  const clickHandler = () => {
    props.setPage(1);
    props.setProperty(props.propertyId);
    navigate(`./${props.propertyId}`);
  };
  return (
    <TableRow
      onClick={(e) => {
        clickHandler();
      }}
    >
      <TableCell>
        <Typography variant="body1">{props.name}</Typography>
        <Typography variant="body2">{props.address}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">Owner</Typography>
        <Typography variant="body2">{props.owner}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">Enrolled in</Typography>
        <Typography variant="body2">{`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`}</Typography>
      </TableCell>
    </TableRow>
  );
};
export default PropertyPreview;
