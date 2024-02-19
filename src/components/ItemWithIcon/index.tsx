import { observer } from "mobx-react";

import { ReactNode } from "react";
import { Typography } from "@mui/material";

import classes from "./ItemWithIcon.module.css";

function ItemWithIcon(props: { text: string; icon: ReactNode }): any {
  const { text, icon } = props;

  return (
    <div className={classes.ItemWithICon}>
      {icon}
      <Typography>{text}</Typography>
    </div>
  );
}

// I am not very familiar with this 'observer' syntax
export default observer((props) => <ItemWithIcon {...props} />);
