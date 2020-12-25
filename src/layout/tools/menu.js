import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { StyledMenuItem } from "../../api/useStyles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import URLs from "../../api/router";

export default function EM() {
  return (
    <div>
      <Accordion className="menux">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill-rule="evenodd"
              d="M3 2C2.44772 2 2 2.44772 2 3V8C2 8.55228 2.44772 9 3 9H9C9.55228 9 10 8.55228 10 8V3C10 2.44772 9.55228 2 9 2H3ZM8 4H4V7H8V4Z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M3 11C2.44772 11 2 11.4477 2 12V21C2 21.5523 2.44772 22 3 22H9C9.55228 22 10 21.5523 10 21V12C10 11.4477 9.55228 11 9 11H3ZM8 13H4V20H8V13Z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M13 15C12.4477 15 12 15.4477 12 16V21C12 21.5523 12.4477 22 13 22H21C21.5523 22 22 21.5523 22 21V16C22 15.4477 21.5523 15 21 15H13ZM20 17H14V20H20V17Z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M13 2C12.4477 2 12 2.44771 12 3V12C12 12.5523 12.4477 13 13 13H21C21.5523 13 22 12.5523 22 12V3C22 2.44772 21.5523 2 21 2H13ZM20 4H14V11H20V4Z"
            ></path>
          </svg>
        </AccordionSummary>
        <AccordionDetails>
          <div className="fc">
            <a href={URLs.cshopURL}>
              <StyledMenuItem>
                <ListItemIcon>
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    class="sc-AykKK btrElB"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.4412 0.161475C7.79311 -0.0144798 8.20733 -0.0144803 8.55924 0.161475L15.0002 3.38197C15.9215 3.84262 15.9215 5.15738 15.0002 5.61803L8.55924 8.83853C8.20733 9.01448 7.79311 9.01448 7.4412 8.83853L1.00022 5.61803C0.0789053 5.15738 0.078912 3.84262 1.00022 3.38197L7.4412 0.161475ZM8.00022 2.11803L3.23629 4.5L8.00022 6.88197L12.7642 4.5L8.00022 2.11803Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.105792 7.55279C0.352781 7.05881 0.953454 6.85858 1.44743 7.10557L8.00022 10.382L14.553 7.10557C15.047 6.85858 15.6477 7.05881 15.8946 7.55279C16.1416 8.04677 15.9414 8.64744 15.4474 8.89443L8.55924 12.3385C8.20733 12.5145 7.79311 12.5145 7.4412 12.3385L0.553005 8.89443C0.059027 8.64744 -0.141197 8.04677 0.105792 7.55279Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.105792 11.0528C0.352781 10.5588 0.953454 10.3586 1.44743 10.6056L8.00022 13.882L14.553 10.6056C15.047 10.3586 15.6477 10.5588 15.8946 11.0528C16.1416 11.5468 15.9414 12.1474 15.4474 12.3944L8.55924 15.8385C8.20733 16.0145 7.79311 16.0145 7.4412 15.8385L0.553005 12.3944C0.059027 12.1474 -0.141197 11.5468 0.105792 11.0528Z"
                    ></path>
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Store" />
              </StyledMenuItem>
            </a>

            <a href={URLs.abdfnxURL}>
              <StyledMenuItem>
                <ListItemIcon>
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    class="sc-AykKK btrElB"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM14 2H2V14H14V2Z"
                    ></path>
                    <path d="M10 4.4C10 4.17909 10.1791 4 10.4 4H11.6C11.8209 4 12 4.17909 12 4.4V11.6C12 11.8209 11.8209 12 11.6 12H10.4C10.1791 12 10 11.8209 10 11.6V4.4Z"></path>
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Founder Site" />
              </StyledMenuItem>
            </a>

            <a href={URLs.contactURL}>
              <StyledMenuItem>
                <ListItemIcon>
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    class="sc-AykKK btrElB"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.88103 2.07832C5.34348 0.96844 6.99642 1.299 6.99642 2.50139V13.7514C6.99642 14.4417 6.43677 15.0014 5.74642 15.0014H1.37142C0.479443 15.0014 -0.125496 14.094 0.21757 13.2706L4.88103 2.07832ZM4.99642 7.00139L2.49642 13.0014H4.99642V7.00139Z"
                    ></path>
                    <path d="M8.99638 2.50139C8.99638 1.299 10.6493 0.96844 11.1118 2.07832L15.7752 13.2706C16.1183 14.094 15.5134 15.0014 14.6214 15.0014H10.2464C9.55603 15.0014 8.99638 14.4417 8.99638 13.7514V2.50139Z"></path>
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Contact US" />
              </StyledMenuItem>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
