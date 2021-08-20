import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FilterModal from "./components/FilterModal.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "beige",
    height: "99vh",
  },
  mainGrid: {
    height: "100%",
  },
  nav: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "beige",
    background: "grey",
    height: "10%",
  },
  col1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "beige",
    height: "80%",
    background: "red",
  },
  col2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "beige",
    height: "80%",
    background: "green",
  },
  col3: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "beige",
    height: "80%",
    background: "red",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "beige",
    background: "grey",
    height: "40%",
    marginTop: "2px",
  },
}));

function App() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(true);
  //initially modal is not open thats why set this to false

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item xs={12}>
          <Paper className={classes.nav}>NavBar</Paper>
        </Grid>

        <Grid item xs={3} className={classes.col1}>
          <Paper className={classes.paper}>Camera</Paper>
          <Paper className={classes.paper}>Pothole Image</Paper>
        </Grid>
        <Grid item xs={6} className={classes.col2}>
          <Paper className={classes.paper}>Map Image</Paper>
          <Paper className={classes.paper}>Graph</Paper>
        </Grid>
        <Grid item xs={3} className={classes.col3}>
          <Paper className={classes.paper}>
            <Modal show={modalOpen} onHide={closeModal}>
              {/* here if show===true then this will open up the modal window and if false then not so you can make an event in which if filter button is clicked then set the modalOpen variable to true */}
              {/* also closeModal is a function which is called when filter applied button is clicked which sets the modalOpen to false */}
              {<FilterModal />}
            </Modal>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
