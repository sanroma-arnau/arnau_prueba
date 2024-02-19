import { TextField, InputAdornment, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import classes from "./ExpeditionsPage.module.css";

import { observer } from "mobx-react";
import React from "react";

function ExpeditionsSearch(props: {
  searchText: string;
  setSearchText: (text: string) => void;
}): any {
  const { searchText, setSearchText } = props;

  //TODO: Move sx to classes and tooltip style
  return (
    <div className={classes.ExpeditionsHeader}>
      <TextField
        value={searchText}
        onChange={(event) => {
          // TODO: useDebounce for performance
          setSearchText(event.target.value);
        }}
        placeholder="Type your reference"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        size="small"
      />
      <Tooltip title="Start/End with ':' to match the beginning/ending of the reference">
        <InfoOutlinedIcon sx={{ color: "gray" }} />
      </Tooltip>
    </div>
  );
}

export default observer((props) => <ExpeditionsSearch {...props} />);
