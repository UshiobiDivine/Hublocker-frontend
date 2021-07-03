import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import classes from "../css/Table.module.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(size, price, firstPay, available, rent) {
  return { size, price, firstPay, available, rent };
}

const rows = [
  createData(
    "Small H295*W460*D520",
    "N450 per item/mo N15,000 XX no of orders Online only price",
    "1N For First Rent",
    "2 Available",
    "Rent Now"
  ),
  createData(
    "Small H296*W460*D520",
    "N450 per item/mo N15,000 XX no of orders Online only price",
    "1N For First Rent",
    "2 Available",
    "Rent Now"
  ),
  createData(
    "Small H297*W460*D520",
    "N450 per item/mo N15,000 XX no of orders Online only price",
    "1N For First Rent",
    "2 Available",
    "Rent Now"
  ),
  createData(
    "Small H298*W460*D520",
    "N450 per item/mo N15,000 XX no of orders Online only price",
    "1N For First Rent",
    "2 Available",
    "Rent Now"
  ),
  createData(
    "Small H299*W460*D520",
    "N450 per item/mo N15,000 XX no of orders Online only price",
    "1N For First Rent",
    "2 Available",
    "Rent Now"
  ),
];

export default function MyTable() {
  //   const classes = useStyles();

  return (
    <div className={classes.containerSup}>
      {rows.map((row) => (
        <div className={classes.container}>
          <div className={classes.item}>{row.size}</div>
          <div className={classes.item}>{row.price}</div>
          <div className={classes.item}>{row.firstPay}</div>
          <div className={classes.item}>{row.available}</div>
          <div className={classes.rent}>{row.rent}</div>
        </div>
      ))}
    </div>

    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow key={row.name}>
    //           <TableCell >
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.calories}</TableCell>
    //           <TableCell align="right">{row.fat}</TableCell>
    //           <TableCell align="right">{row.carbs}</TableCell>
    //           <TableCell align="right">{row.protein}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
