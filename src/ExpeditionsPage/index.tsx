import { observer } from "mobx-react";
import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import { Expedition } from "./types";
import ExpeditionsSearch from "./ExpeditionsSearch";
import ExpeditionsSort from "./ExpeditionsSort";
import ExpeditionItem from "./ExpeditionItem";

import { textMatchesSubstring } from "../utils";

function ExpeditionsPage(props: { expeditions: Expedition[] }): any {
  const { expeditions } = props;
  const [searchText, setSearchText] = useState<string>("");
  const [sortField, setSortField] = useState<keyof Expedition>("date");
  const [sortAscending, setSortAscending] = useState<boolean>(true);

  return (
    <div>
      <Typography variant="h4">Expeditions</Typography>
      <Grid
        container
        direction="row"
        // TODO: move style to classes
        justifyContent="space-between"
        marginBottom={1}
        marginTop={1}
      >
        <Grid item>
          <ExpeditionsSearch
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </Grid>
        <Grid item>
          <ExpeditionsSort
            sortField={sortField}
            setSortField={setSortField}
            sortAscending={sortAscending}
            setSortAscending={setSortAscending}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={1}>
        {expeditions
          .filter((expedition: Expedition) =>
            // I am assuming the Reference will never have ":"
            textMatchesSubstring(expedition.reference, searchText)
          )
          .sort((a: Expedition, b: Expedition) => {
            if (a[sortField] <= b[sortField]) {
              return sortAscending ? -1 : 1;
            }
            return sortAscending ? 1 : -1;
          })
          .map((expedition: Expedition, idx) => (
            <Grid item key={idx}>
              <ExpeditionItem key={idx} expedition={expedition} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

// I am not very familiar with this 'observer' syntax
export default observer((props) => <ExpeditionsPage {...props} />);
