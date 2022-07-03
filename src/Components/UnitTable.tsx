import React, { useEffect, useState } from "react";
import { token } from "../Pages/ManageProperty";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";

interface UnitTableProps {
  propertyId: number;
}
const UnitTable: React.FC<UnitTableProps> = (props) => {
  const [content, setContent] = useState();
  const [address, setAddress] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // find properties with company id
        let response = await axios.get(
          `http://localhost:1337/api/units?populate=*&filters[property][id][$eq]=${props.propertyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const tableContent = response.data.data.map(
          (unit: {
            attributes: {
              id: number;
              unitNumber: string;
              tenants: { data: { attributes: { email: string } }[] };
              rentRate: number;
            };
          }) => (
            <TableRow key={unit.attributes.id}>
              <TableCell>
                <Typography>{unit.attributes.unitNumber}</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {unit.attributes.tenants.data[0].attributes.email}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>{unit.attributes.rentRate}</Typography>
              </TableCell>
            </TableRow>
          )
        );
        setContent(tableContent);
        response = await axios.get(
          `http://localhost:1337/api/properties?populate=*&filters[id][$eq]=${props.propertyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const address = response.data.data[0].attributes.address;
        setAddress(
          `${address.line1}, ${address.city}, ${address.state}, ${address.zip}`
        );
      } catch {
        // Catch Here
      }
    };
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper} sx={{ p: 3, mt: 5 }}>
      <Typography variant="h6">{`${address}`}</Typography>
      <Table>
        <TableBody>{content}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default UnitTable;
