import React from "react";
import Grid from "@material-ui/core/Grid";

export interface HermesGridProps {
  leftColumn?: JSX.Element | undefined;
  mainColumn: JSX.Element | undefined;
  rightColumn?: JSX.Element | undefined;
}

export const HermesGrid: React.FC<HermesGridProps> = ({
  leftColumn,
  mainColumn,
  rightColumn,
}) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          {leftColumn}
        </Grid>
        <Grid item xs={8}>
          {mainColumn}
        </Grid>
        <Grid item xs>
          {rightColumn}
        </Grid>
      </Grid>
    </div>
  );
};

export default HermesGrid;
