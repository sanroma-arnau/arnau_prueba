import {
  Select,
  MenuItem,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import classes from "./ExpeditionsPage.module.css";

import { observer } from "mobx-react";
import React from "react";

function ExpeditionsSort(props: {
  sortField: string;
  setSortField: (text: string) => void;
  sortAscending: boolean;
  setSortAscending: (asc: boolean) => void;
}): any {
  const { sortField, setSortField, sortAscending, setSortAscending } = props;

  const sortFieldOptions = [
    { name: "statusCode", displayName: "Status" },
    { name: "country", displayName: "Country" },
    { name: "date", displayName: "Date" },
    { name: "type", displayName: "Type" },
  ];

  //TODO: move typography margin to classes
  return (
    <div className={classes.ExpeditionsHeader}>
      <Typography variant="body1" marginRight={1}>
        Sort by:
      </Typography>
      <Select
        value={sortField}
        onChange={(event) => {
          setSortField(event.target.value);
        }}
        size="small"
      >
        {sortFieldOptions.map((sortField, idx) => (
          <MenuItem key={idx} value={sortField.name}>
            {sortField.displayName}
          </MenuItem>
        ))}
      </Select>
      <Tooltip title={sortAscending ? "Ascending" : "Descending"}>
        <IconButton onClick={() => setSortAscending(!sortAscending)}>
          {sortAscending ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default observer((props) => <ExpeditionsSort {...props} />);
