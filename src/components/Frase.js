import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Frase = ({frase}) => {
  return (
    <Fragment>
      
      <Grid container>
        <Grid item>
         
          <Typography variant="h3" gutterBottom className="fontsFrase">
            "{frase.quote}"
          </Typography>
          <Typography variant="inherit" gutterBottom className="fontsTitle">
            Autor : {frase.author}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Frase;
