import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../../styles/SearchBar.css";
import { Button } from "@mui/material";
const SearchBar = () => {
  const [searchContext, setSearchContext] = useState("");

  const handleChange = (event) => {
    setSearchContext(event.target.value);
    console.log(searchContext);
  };
  const handleSearch = () => {};
  return (
    <div className="Search_Bar">
      <div className="Search_Left_Section">
        <TextField
          fullWidth
          label="Search..."
          id="fullWidth"
          onChange={handleChange}
        />
      </div>
      <div className="Search_Right_Section">
        <Button
          variant="contained"
          color="primary"
          sx={{ height: "55px" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
