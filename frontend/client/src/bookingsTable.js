import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

// Generate Order Data
function createData(id, bookingId, date, time, size, name, amount) {
  return { id, bookingId, date, time, size, name, amount };
}

const rows = [
  createData(0, 1, "13/4/2021", "12:30pm", "6", "Sarah Jones", 150.0),
  createData(1, 2, "13/4/2021", "12:30pm", "4", "Michael Truss", 100.0),
  createData(2, 3, "13/4/2021", "1:00pm", "3", "Tom Blues", 60.0),
  createData(3, 4, "14/4/2021", "1:30pm", "2", "Jessica May", 40.0),
  createData(4, 5, "15/4/2021", "1:30pm", "8", "Scott Dimarco", 300.0),
  createData(5, 6, "15/4/2021", "1:30pm", "4", "Damian Smith", 80.0),
  createData(5, 7, "16/4/2021", "1:30pm", "6", "Katrina Day", 250.0),
  createData(5, 8, "16/4/2021", "1:30pm", "10", "Lily Hutchinson", 400.0),
];

export default function BookingsTable() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <Typography variant="h6">Bookings</Typography>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Amount ($)</TableCell>
            <TableCell>Invoice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.bookingId}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <Button variant="contained">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
