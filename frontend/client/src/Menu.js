import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// Generate Order Data
function createData(id, description, price) {
  return { id, description, price };
}

const rows = [
  createData(0, "Item 1", "Price"),
  createData(1, "Item 2", "Price"),
  createData(2, "Item 3", "Price"),
  createData(3, "Item 4", "Price"),
];

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Menu() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.conatainer}>
        <Table size="small">
          <TableHead>
            <Typography variant="h5">Entre</Typography>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Description </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Price </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Table size="small">
          <TableHead>
            <Typography variant="h5">Main</Typography>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Description </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Price </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Table size="small">
          <TableHead>
            <Typography variant="h5">Dessert</Typography>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Description </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Price </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
