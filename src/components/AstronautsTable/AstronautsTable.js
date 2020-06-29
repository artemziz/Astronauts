import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import AstronautsTableToolbar from '../AstronautsTableToolbar/AstronautsTableToolbar';
import AstronautsTableHead from '../AstronautsTableHead/AstronautsTableHead';
import Astronaut from '../Astronaut/Astronaut';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }


export default function AstronautsTable() {
    const classes = useStyles();
    const InitData = [{ "name": "Sigmund Jähn", "date": 272926800, "days": 7, "mission": "Sojus 31 / Sojus 29",
"isMultiple": false },
  { "name": "Ulf Merbold", "date": 438814800, "days": 10, "mission": "STS-9", "isMultiple":
true },
  { "name": "Reinhard Furrer", "date": 499467600, "days": 7, "mission": "STS-61-A (D1)",
"isMultiple": false },
  { "name": "Ernst Messerschmid", "date": 499467600, "days": 7, "mission": "STS-61-A (D1)",
"isMultiple": false },
  { "name": "Klaus-Dietrich Flade", "date": 700779600, "days": 7, "mission": "Sojus TM-14 / Sojus TM-13", "isMultiple": false },
  { "name": "Hans Schlegel", "date": 735768000, "days": 9, "mission": "STS-55 (D2)",
"isMultiple": true },
  { "name": "Ulrich Walter", "date": 735768000, "days": 9, "mission": "STS-55 (D2)",
"isMultiple": false },
  { "name": "Thomas Reiter", "date": 810072000, "days": 179, "mission": "Sojus TM-22 / Euromir 95", "isMultiple": true },
  { "name": "Reinhold Ewald", "date": 855522000, "days": 19, "mission": "Sojus TM-25 / Sojus TM-24", "isMultiple": false },
  { "name": "Gerhard Thiele", "date": 950216400, "days": 11, "mission": "STS-99",
"isMultiple": false },
  { "name": "Alexander Gerst", "date": 1401224400, "days": 165, "mission": "Sojus TMA-13M / ISS-Expedition 40 /ISS-Expedition 41", "isMultiple": false }]

    const [data,setData] = useState(InitData);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    const deleteItems = (event) =>{

      let newData = data.slice();
      newData = newData.filter(item =>!selected.includes(item.name));
      setData(newData);
      setSelected([]);
    }
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = data.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };
  
    const isSelected = (name) => selected.indexOf(name) !== -1;
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  
    // function formatDate(unix_timestamp){
    //   let date = new Date(unix_timestamp * 1000);
    //   let year = date.getFullYear();
    //   var month = '0' + (+date.getMonth()+1);
    //   var day = '0' + date.getDate();
    
    //   return day.substr(-2)+"." + month.substr(-2)+"." + year;
    // }
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <AstronautsTableToolbar 
            numSelected={selected.length}
            deleteItems = {deleteItems}
          />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <AstronautsTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <Astronaut
                        key = {row.name}
                        isItemSelected = {isItemSelected}
                        labelId = {labelId}
                        row = {row}
                        handleClick = {handleClick}
                      />
                      /* <TableRow
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
                      </TableRow> */
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 5, 10]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    );
  }