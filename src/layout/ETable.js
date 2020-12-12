import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStylesTB } from "../api/useStyles";
import { TableHead } from "@material-ui/core";
import URLs from "../api/router";

// imgs
import {
  vscode,
  atom,
  csb,
  xcode
} from "../assets/img";

export default function ETB() {
  const classes = useStylesTB();

  return (
    <div>
      <TableContainer component={Paper}>
        <TableHead className="pack">
          <TableRow>
            <TableCell>
              <p>Editors</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <a href={URLs.packURLs.editors.vscodeURL}>
                  <img src={vscode} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.editors.atomURL}>
                  <img src={atom} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.editors.csbURL}>
                  <img src={csb} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.editors.xcodeURL}>
                  <img src={xcode} alt="" width="120" />
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
