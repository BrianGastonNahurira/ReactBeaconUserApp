import React from "react";
import { TextField } from "@mui/material";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "../../Header/Header.css";

function Searchbar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchinputs">
        <TextField
          id="outlined-basic"
          label={placeholder}
          variant="outlined"
          size="medium"
        />
        <div className="searchicon">
          <SearchIcon fontSize="mediam" id="searchicon-1" color="primary" />
        </div>
      </div>
      <div className="dataresult"></div>
    </div>
  );
}

export default Searchbar;
