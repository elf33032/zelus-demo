import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import { token } from "../Pages/ManageProperty";
import axios from "axios";
import PropertyPreview from "./PropertyPreview";

interface PropertyTableProps {
  companyId: number;
  setPage: Function;
  setProperty: Function;
}

const PropertyTable: React.FC<PropertyTableProps> = (props) => {
  const [previews, setPreviews] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // find properties with company id
        let response = await axios.get(
          `http://localhost:1337/api/properties?populate=*&filters[property_company][id][$eq]=${props.companyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const tableContent = response.data.data.map(
          (property: {
            id: number;
            attributes: {
              propertyName: string;
              address: {
                line1: string;
                city: string;
                state: string;
                zip: string;
              };
              name: { firstName: string };
              publishedAt: string;
            };
          }) => (
            <PropertyPreview
              key={property.id}
              name={property.attributes.propertyName}
              address={`${property.attributes.address.line1}, ${property.attributes.address.city}, ${property.attributes.address.state}, ${property.attributes.address.zip}`}
              owner={property.attributes.name.firstName}
              enrollTime={property.attributes.publishedAt}
              propertyId={property.id}
              setPage={props.setPage}
              setProperty={props.setProperty}
            />
          )
        );
        setPreviews(tableContent);
      } catch {}
    };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ p: 3, mt: 5 }}>
      <Typography variant="h6">Managing Properties</Typography>
      <Table>
        <TableBody>{previews}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default PropertyTable;
