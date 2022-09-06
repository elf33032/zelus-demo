import React from "react";
import { TableCell, TableRow, Typography, Link, Divider } from "@mui/material";

interface ManagePropertyTableRowProps {
  propertyName: string;
  propertyAddress: string;
  owner: string;
  manager: string;
}
const ManagePropertyTableRow: React.FC<ManagePropertyTableRowProps> = (
  props
) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {props.propertyName}
        </Typography>
        <Typography variant="body2" sx={{ color: "#999999" }}>
          {props.propertyAddress}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Owner
        </Typography>
        <Typography variant="body2" sx={{ color: "#999999" }}>
          {props.owner}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Manager
        </Typography>
        <Typography variant="body2" sx={{ color: "#999999" }}>
          {props.manager}
        </Typography>
      </TableCell>
      <TableCell align={"right"}>
        <Link href="#">View</Link>
        <Typography variant={"body2"} display={"inline"}>
          {" "}
          |{" "}
        </Typography>
        <Link href="#">Edit</Link>
        <Typography variant={"body2"} display={"inline"}>
          {" "}
          |{" "}
        </Typography>
        <Link href="#" underline={"none"} color={"#FF1E10"}>
          Delete
        </Link>
      </TableCell>
    </TableRow>
  );
};
export default ManagePropertyTableRow;
