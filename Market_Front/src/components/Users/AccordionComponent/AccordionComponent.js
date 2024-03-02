import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
 import "./AccordionComponent.css";
import OneElementAccordion from "./OneElemntAccordion/OneElementAccordion";
  
  export default function AccordionComponent({ region, index }) {
    

    return (
      <div className="accBody">
        <Accordion>
          <AccordionSummary
            expandIcon="▼"
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}
            >
              {index + 1} - {region.name}
            </Typography>
          </AccordionSummary>

          {region.users.map((user, index) => (
            <AccordionDetails key={index}>
              <OneElementAccordion   user={user} />
            </AccordionDetails>
          ))}
        </Accordion>
      </div>
    );
  }
