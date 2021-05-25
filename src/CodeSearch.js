import React from "react";
import {
  Button,
    Card,
  Container,
  createMuiTheme,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  ThemeProvider,
  withStyles,
} from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import SearchIcon from "@material-ui/icons/Search";

const TITLE = {
  color: "#333333",
  fontFamily: "'NunitoSans-Regular', 'Nunito Sans', sans-serif",
  fontWeight: "bold",
  textAlign: "left",
  lineHeight: "normal",
  fontSize: "32px",
};

const DESCRIPTION = {
  color: "#333333",
  fontFamily: "'NunitoSans-Regular', 'Nunito Sans', sans-serif",
  textAlign: "left",
  lineHeight: "normal",
  fontSize: "14px",
  paddingLeft: "5px",
};

const background = {
  backgroundColor: "#FFF",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  borderRadius: "10px",
};

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles({
    root: {
      width: "150px",
      margin:"20px",
      padding:"20px"
    },
  });

export default function CodeSearch() {
    const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={8}>
        <p style={TITLE}>Code Search Library</p>
        <p style={DESCRIPTION}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur
        </p>
      </Grid>
      <Grid item md={9} style={background}>
        <Grid container style={{ padding: "10px" }}>
          <Grid md={3}>
            <FormControl style={{ width: "100%" }} variant="outlined">
              <Select
                native
              
              >
                <option selected value="Condition">Condition</option>
                <option value="Drugs">Drugs</option>
                <option value="Procedures">Procedures</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={7}>
            <TextField
              style={{ width: "100%" }}
              placeholder="asdf"
              variant="outlined"
            />
          </Grid>
          <Grid item md={2}>
            <ThemeProvider theme={theme}>
              <Button
                style={{ width: "100%", height: "100%", color: "#fff" }}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{marginTop:"20px"}}
        direction="row"
        justify="center"
        alignItems="center"
      >
          <Card  className={classes.root} variant="outlined"></Card>
          <Card  className={classes.root} variant="outlined"></Card>
          <Card  className={classes.root} variant="outlined"></Card>
      </Grid>
    </Grid>
  );
}
