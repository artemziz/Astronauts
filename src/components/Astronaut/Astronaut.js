import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';


function formatDate(unix_timestamp){
    let date = new Date(unix_timestamp * 1000);
    let year = date.getFullYear();
    var month = '0' + (+date.getMonth()+1);
    var day = '0' + date.getDate();
  
    return day.substr(-2)+"." + month.substr(-2)+"." + year;
}

export default function Astronaut(props){
    const {isItemSelected,handleClick,row,labelId} = props;
    return(
        <TableRow
        hover
        onClick={(event) => handleClick(event, row.name)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.name}
        selected={isItemSelected}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={isItemSelected}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </TableCell>
        <TableCell component="th" id={labelId} scope="row" padding="none">
          {row.name}
        </TableCell>
        <TableCell align="right">{formatDate(row.date)}</TableCell>
        <TableCell align="right">{row.days}</TableCell>
        <TableCell align="right">{row.mission}</TableCell>
        <TableCell align="right">{row.isMultiple?"Yes":"No"}</TableCell>
      </TableRow>
    
    )
}