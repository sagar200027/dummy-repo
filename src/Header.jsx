import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ViewListIcon from '@material-ui/icons/ViewList';
import { makeStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
    palette: {
        primary: {
          main: '#808080'
        },
        secondary: blueGrey
      },
      typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
     }
}));
    

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ background: '#00000f' }}>
      <Toolbar>
      <ViewListIcon />

        <Typography className={classes.typographyStyles}>
          POTHOLE
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;