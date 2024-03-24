import React, { useState } from "react";
import "../../styles/Table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const columns = [
  { id: "Id", label: "#", minWidth: 100, align: "left" },
  { id: "Question", label: "Question", minWidth: 170 },
  { id: "Category", label: "Category", minWidth: 170, align: "right" },
  { id: "Status", label: "Status", minWidth: 170, align: "right" },
  { id: "Action", label: "Action", minWidth: 170, align: "right" },
];

function createData(Id, Question, Category, Status) {
  return { Id, Question, Category, Status };
}

const rows = [
  createData(1, "What is the vision of iLabs?", "About Company", "Published"),
  createData(2, "What is the mission of iLabs?", "About Company", "Draft"),
  createData(3, "When was iLabs established?", "About Company", "Published"),
  createData(4, "When was iLabs established?", "About Company", "Draft"),
  createData(5, "When was iLabs established?", "About Company", "Published"),
  createData(6, "When was iLabs established?", "About Company", "Draft"),
  createData(7, "When was iLabs established?", "About Company", "Published"),
];

const QuestionTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorMenu, setAnchorMenu] = useState(null);

  const handleViewQuestion = () => {
    console.log("view");
  };

  const handleDeactivate = () => {
    console.log("Deactivate");
  };

  const handleDelete = () => {
    console.log("Delete");
  };
  const handleOpenMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const settings = [
    <Button
      sx={{ width: "100px", m: "0 auto" }}
      startIcon={<RemoveRedEyeIcon />}
      onClick={handleViewQuestion}
    >
      View
    </Button>,
    <Button
      sx={{ width: "100px", m: "0 auto" }}
      startIcon={<DeleteForeverIcon />}
      onClick={handleDelete}
    >
      Delete
    </Button>,
    <Button
      sx={{ width: "100px", m: "0 auto" }}
      startIcon={<CheckCircleOutlineIcon />}
      onClick={handleDeactivate}
    >
      Deactivate
    </Button>,
  ];

  return (
    <div className="Table_Page">
      <div className="Table">
        <TableContainer sx={{ maxHeight: 440, borderRadius: "8px " }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.Id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "Status" ? (
                              <Button
                                variant={
                                  value === "Published"
                                    ? "contained"
                                    : "outlined"
                                }
                                color={
                                  value === "Published" ? "success" : "primary"
                                }
                                sx={{ width: "120px" }}
                              >
                                {value}
                              </Button>
                            ) : column.id === "Action" ? (
                              <div>
                                <IconButton
                                  aria-label="Open Menu"
                                  onClick={handleOpenMenu}
                                >
                                  <MoreHorizIcon />
                                </IconButton>
                                <Menu
                                  sx={{
                                    width: "500px",
                                    height: "260px",
                                    borderRadius: "5px",
                                  }}
                                  id="menu-appbar"
                                  anchorEl={anchorMenu}
                                  anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                  }}
                                  keepMounted
                                  transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                  }}
                                  open={Boolean(anchorMenu)}
                                  onClose={handleCloseMenu}
                                >
                                  {settings.map((setting) => (
                                    <MenuItem
                                      key={setting}
                                      onClick={handleCloseMenu}
                                      sx={{ width: "200px", height: "45px" }}
                                    >
                                      <Typography
                                        textAlign="center"
                                        sx={{ margin: "0 auto" }}
                                      >
                                        {setting}
                                      </Typography>
                                    </MenuItem>
                                  ))}
                                </Menu>
                              </div>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default QuestionTable;
