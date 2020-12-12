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
  npm,
  fa,
  mu,
  git,
  gh,
  gql,
  fb,
  nextjs,
  flutter,
  pm,
  elec,
  reactjs,
  angularjs,
  dj,
  nuxtjs,
  expo
} from "../assets/img";
import ETB from "./ETable";

export default function TB() {
  const classes = useStylesTB();

  return (
    <div className="tablex">
      <TableContainer component={Paper}>
        <TableHead className="pack">
          <TableRow>
            <TableCell>
              <p>Packages</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <a href={URLs.packURLs.muURL}>
                  <img src={mu} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.gitURL}>
                  <img src={git} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.fbURL}>
                  <img src={fb} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.pmURL}>
                  <img src={pm} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.gqlURL}>
                  <img src={gql} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.elecURL}>
                  <img src={elec} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.reactURL}>
                  <img src={reactjs} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.expoURL}>
                  <img src={expo} alt="" width="120" />
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <a href={URLs.packURLs.nextjsURL}>
                  <img src={nextjs} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.nuxtjsURL}>
                  <img src={nuxtjs} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.faURL}>
                  <img src={fa} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.angularURL}>
                  <img src={angularjs} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.githubURL}>
                  <img src={gh} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.npmURL}>
                  <img src={npm} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.flutterURL}>
                  <img src={flutter} alt="" width="120" />
                </a>
              </TableCell>
              <TableCell align="center">
                <a href={URLs.packURLs.djURL}>
                  <img src={dj} alt="" width="120" />
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <br />
      <ETB />
    </div>
  );
}
