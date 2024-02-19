import { observer } from "mobx-react";
import React from "react";
import { Grid } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

// renamed the styles file. this is how I am used to doing it
import classes from "./ExpeditionsPage.module.css";

import ItemWithIcon from "../components/ItemWithIcon";
import { Expedition } from "./types";

function ExpeditionItem(props: { expedition: Expedition }): any {
  const { expedition } = props;
  console.log(expedition);
  return (
    <Grid container direction="column" className={classes.ExpeditionItem}>
      <Grid container direction="row" className={classes.ExpeditionItemRow}>
        <Grid item>{expedition.reference}</Grid>
        <Grid item>Created: {expedition.createdAt.slice(0, 10)}</Grid>
        <Grid item>Status: {expedition.statusCode}</Grid>
        <Grid item>Type: {expedition.type}</Grid>
      </Grid>
      <Grid container direction="row" className={classes.ExpeditionItemRow}>
        <Grid item>{expedition.street}</Grid>
        <Grid item>{expedition.city}</Grid>
        <Grid item>{expedition.country}</Grid>
        <Grid item>{expedition.postalCode}</Grid>
      </Grid>
    </Grid>
  );
}

// I am not very familiar with this 'observer' syntax
export default observer((props) => <ExpeditionItem {...props} />);
